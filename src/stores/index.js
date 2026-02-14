import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(persist)

export default pinia

// import { useDemoStore } from './modules/demo'
// export { useDemoStore }
export * from './modules/demo' // 接收 demo 模块的所有按需导出
