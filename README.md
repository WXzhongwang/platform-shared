# platform-shared

前端**公共包仓**（pnpm monorepo），企业平台前端公共代码唯一出口。

| 包 | 说明 |
|---|---|
| @platform/ui | 统一组件库封装 |
| @platform/api-client | 网关请求封装（统一鉴权头、错误码、401 拦截） |
| @platform/auth | 环境探测（PC 浏览器/钉钉/企微/飞书）→ 免登方式选择 → 统一 JWT |
| @platform/utils | 通用工具 |

## 发版
changesets 管理版本，发布 npm 私服（Verdaccio/Nexus）；基座与子应用 semver 锁定消费，开发期 npm link 联调。