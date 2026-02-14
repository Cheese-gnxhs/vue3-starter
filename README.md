# vue3-starter

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

### 开发须知

views与路由的结构推荐
src/views/
├── home/
│ └── HomeIndex.vue # /
├── explore/
│ ├── ExploreIndex.vue # /explore
│ ├── CategoryList.vue # /explore/categories
│ └── TagList.vue # /explore/tags
├── posts/
│ ├── PostList.vue # /posts
│ ├── PostDetail.vue # /posts/:id
│ ├── PostCreate.vue # /posts/new
│ └── PostEdit.vue # /posts/:id/edit
├── authors/
│ ├── AuthorList.vue # /authors
│ └── AuthorProfile.vue # /authors/:id
├── account/
│ ├── Login.vue # /account/login
│ ├── Register.vue # /account/register
│ └── Settings.vue # /account/settings
├── user/
│ ├── UserCenterLayout.vue # /user (二级路由容器)
│ ├── Overview.vue # /user/overview
│ ├── Favorites.vue # /user/favorites
│ ├── Collections.vue # /user/collections
│ └── Subscriptions.vue # /user/subscriptions
└── errors/
├── NotFound.vue # 404
└── Forbidden.vue # 403

**命名规则建议（统一就舒服）** -模块首页：XxxIndex.vue（如 HomeIndex.vue, ExploreIndex.vue）-列表页：XxxList.vue -详情页：XxxDetail.vue -创建/编辑：XxxCreate.vue / XxxEdit.vue -二级容器：XxxLayout.vue 或 XxxCenterLayout.vue
