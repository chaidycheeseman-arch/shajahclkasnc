# JuJoo Phone 源码提取安全报告

## 提取日期: 2026-05-12
## 目标: https://july-ovo223.vercel.app/

---

## 1. 总体评估

| 项目 | 状态 | 安全等级 |
|------|------|----------|
| Source Map (.js.map) | 未暴露 (404) | ✅ 安全 |
| .git 目录 | 未暴露 (404) | ✅ 安全 |
| .env 环境变量 | 未暴露 (404) | ✅ 安全 |
| AdminPanel 模块 | javascript-obfuscator 强混淆 | ✅ 安全 |
| App 主代码 (5.8MB) | 仅 minify 未混淆，可完整还原 | ❌ 危险 |
| Supabase 凭证 | 硬编码在前端 JS 中，可直接提取 | ⚠️ 风险 |
| 激活码验证逻辑 | 完全暴露，可还原完整流程 | ❌ 危险 |
| 中文 UI 字符串 | 9642 条完整提取 | ⚠️ 可读 |
| API 调用 | 23 个 fetch 端点完整提取 | ⚠️ 可读 |

---

## 2. 提取到的敏感凭证

### Supabase 实例 #1 (主站)
- URL: `https://hrnebfpykywhqxtlqusc.supabase.co`
- Anon Key: `eyJhbGci...b3ydkE7_Y7QHpJ-Ud0Fp18Dw2LAvQOh1rEQKyAh0y6s`

### Supabase 实例 #2
- URL: `https://hvznyifterzlgvqczpac.supabase.co`
- Anon Key: `eyJhbGci...RigZ9VHLeN2g2bvbhibCW170Z3pFVc-_7nAqgHvWY2Q`

### 门禁注册端点
- `POST {supabaseUrl}/functions/v1/gate-register`
- 参数: email, password, displayName, activationCode, deviceId, sessionSlotId, userAgent, ip

---

## 3. 激活码 / 门禁系统完整逻辑 (已还原)

### 认证流程
1. 用户打开页面 → 检查 sessionStorage `gatekeeper_ui_approved`
2. 无登录态 → 显示登录/注册界面
3. 注册需要: 邮箱 + 密码 + QQ号(displayName) + 激活码(activationCode)
4. 调用 Supabase Edge Function `gate-register` 验证
5. 验证通过 → 写入 Supabase `gate_user_access` 表
6. 定期轮询检查状态 (approved/pending/rejected/revoked/banned/expired)

### 激活码验证错误码 (完整)
- `invalid_format` - 激活码格式不正确（至少 8 位字母或数字）
- `not_found` - 激活码不存在
- `used` - 该激活码已被使用
- `voided` - 该激活码已作废
- `expired` - 该激活码已过期
- `batch_voided` - 该批激活码已停用

### 设备管理
- 设备ID来源: IndexedDB > sessionStorage > localStorage > push恢复 > 新生成UUID
- 存储键: `d-ai_asyncStorage:device_id`, `d-ai_gate_web_device_id`, `d-ai_gate_web_session_slot_id`
- 支持多设备管理 (device_selection_required 状态)
- BroadcastChannel 跨 tab 同步检测

### 门禁状态机
```
unknown → loading → approved (进入应用)
                  → pending (等待审核)
                  → rejected / revoked / banned / expired (拒绝)
                  → device_selection_required (选择设备)
                  → device_blocked (设备被封)
                  → error (异常)
```

### 容错机制
- 最大重试 5 次
- 前台轮询间隔: 60s (pending) / 10min (approved)
- 后台轮询间隔: 5min (pending) / 30min (approved)
- 网络超时: 15s (注册) / 12s (存储读取) / 8s (getSession)

---

## 4. 数据库表结构 (从 RPC 调用推断)

- `gate_user_access` - 用户门禁状态 (user_id, status, last_active_at)
- `push_subscriptions` - 推送订阅 (endpoint, device_id)
- Supabase Auth - 标准用户认证

---

## 5. 提取的文件清单

### 原始资源
- `assets/App-Dybc6aLo.js` - 主应用 (5.8MB, 272101行, 已格式化)
- `assets/AdminPanel-CPtRUQj8.js` - 管理面板 (115KB, 强混淆)
- `assets/vendor-BBrb-ole.js` - 第三方库 (260KB)
- `assets/index-CO_e8yUt.js` - 入口 (14KB)
- `assets/index-BPJBYYxY.css` - 样式表 (450KB)
- `assets/x--jYrg3Zr.js` - Lucide 图标库 (11KB)
- `assets/*.worker.js` - Web Workers

### 分析结果
- `src/_chinese_strings.txt` - 9642 条中文 UI 文本
- `src/_classnames.txt` - 10493 个 CSS className
- `src/_components.txt` - 28 个组件名
- `src/_urls.txt` - 159 个外部 URL + 7 个内部路径
- `src/_storage_keys.txt` - 8 个 storage 操作
- `src/_fetch_calls.txt` - 23 个 API 调用
- `src/_tailwind_classes.txt` - 6154 个 Tailwind 类名
- `src/gatekeeper-module.js` - 门禁系统完整代码 (2451行)
- `src/chunks/` - 91 个代码分块 (每块 ~3000 行)

---

## 6. 安全建议

### 紧急
1. **App 主代码必须混淆** - 使用 javascript-obfuscator 或 terser 强混淆
2. **Supabase Anon Key 暴露** - 虽然 anon key 本身是公开的，但需确保 RLS 策略严格

### 重要
3. **激活码验证应移到服务端** - 目前虽然调用了 Edge Function，但前端完整暴露了验证流程和所有错误码
4. **设备ID生成逻辑透明** - 攻击者可以构造任意 deviceId
5. **门禁绕过可能性** - sessionStorage `gatekeeper_ui_approved=1` 可被手动设置

### 建议
6. 对所有业务逻辑 JS 统一使用 obfuscator 处理（目前只有 AdminPanel 做了）
7. 添加 CSP 头部防止注入
8. 考虑代码分割 + 按需加载敏感模块
