# Vue3 Starter 模板

> 🚀 Vue3 项目基础模板仓库。

## 模板使用说明

**方法1：直接克隆指定分支的仓库：**

```sh
git clone -b ui-mobile https://github.com/Cheese-gnxhs/vue3-starter.git
# 或：git clone -b ui-pc https://github.com/Cheese-gnxhs/vue3-starter.git
cd my-project
rm -rf .git  # 删除全部git历史（必须要！否则会跟模板形成关联）
git init
git add .
git commit -m "init from mobile template"
```

**方法2：「Use this template」**

点击「Use this template」按钮可基于本模板创建新项目，但只会使用其默认分支

如果想使用其他分支，先改一下默认分支，然后点击「Use this template」按钮，再把默认分支改回 main

## Available Template Branches

- main → Core template
- ui-mobile → Mobile (Vant)
- ui-pc → PC (Element Plus)

---

## 🚀 技术栈

- Vue 3
- Vite
- Vue Router
- Pinia
- Axios
- SCSS
- ESLint
- Husky + lint-staged
- pnpm

---

# 📦 安装依赖

```sh
pnpm install
```

---

# 🧪 本地开发

```sh
pnpm dev
```

启动开发服务器，支持热更新。

---

# 🏗 生产环境构建

```sh
pnpm build
```

构建产物输出至：

```
dist/
```

---

# 🔍 代码检查

| 命令           | 作用                             |
| -------------- | -------------------------------- |
| pnpm lint      | 只跑 eslint（全量）              |
| pnpm lint:fix  | eslint 全量修复                  |
| pnpm format    | prettier 全量格式化              |
| pnpm check     | eslint + prettier 检查           |
| pnpm check:all | oxlint + eslint + prettier       |
| 提交时         | eslint + prettier 只针对改动文件 |

---

# 📂 目录结构说明

```
src/
├── api/            # 接口模块（按业务拆分）
├── assets/         # 静态资源
├── components/     # 公共组件
├── layout/         # 布局组件
├── router/         # 路由配置
├── store/          # Pinia 状态管理
├── styles/         # 全局样式
│   ├── reset.scss
│   ├── base.scss
│   └── variables.scss
├── utils/          # 工具函数（如 request）
├── views/          # 页面组件（路由级组件）
└── main.js
```

---

# 🛣 路由结构规范

## 一级路由 = 业务模块目录

示例：

```
views/
├── home/
│   ├── HomeLayout.vue
│   ├── HomeOne.vue
│   ├── HomeTwo.vue
```

## 二级路由使用相对路径

推荐写法：

```js
{
  path: '/home',
  component: () => import('@/views/home/HomeLayout.vue'),
  children: [
    { path: '', redirect: 'one' },
    { path: 'one', component: () => import('@/views/home/HomeOne.vue') }
  ]
}
```

⚠ 不建议在 children 中使用以 `/` 开头的绝对路径。

---

# 🗂 状态管理规范（Pinia）

- 各模块放在 `store/modules`
- 统一在 `store/index.js` 导出
- 推荐使用 setup 语法
- 已内置持久化插件

示例：

```js
export const useDemoStore = defineStore('demo', () => {
  const count = ref(0)
  const increment = () => count.value++
  return { count, increment }
})
```

---

# 🌐 接口封装规范

统一使用：

```
src/utils/request.js
```

已封装：

- axios 实例
- 请求拦截器
- 响应拦截器

接口地址使用环境变量：

```
VITE_API_BASE_URL
```

示例：

```
.env.development
.env.production
```

使用方式：

```js
import.meta.env.VITE_API_BASE_URL
```

---

# 🎨 样式规范

- reset 只做基础清理
- 字体与基础排版写在 body 中
- 不在 `*` 上使用 font 简写属性
- 推荐统一定义 h1 ~ h6 标题规范

---

# 🧱 开发建议

- 页面组件只负责结构
- 业务逻辑抽离至 store 或 composables
- 接口按业务拆分
- 避免全局变量污染
- 保持目录模块化

---

# 🌍 部署说明

默认部署在根路径 `/`：

```
https://yourdomain.com/
```

如需部署在子路径：

在 vite.config.js 中设置：

```js
base: '/sub-path/'
```

同时服务器需配置 SPA 重写规则。

---

# 🔀 分支说明

- main：稳定核心模板
- 其他分支：功能增强版本

建议从 main 派生新版本。

---

# 📌 扩展方向

- 登录与鉴权模块
- 权限控制
- 全局错误处理
- UI 框架集成
- 国际化支持

---

# 📄 License

MIT
