<script setup>
// 使用仓库数据
import { useDemoStore } from '@/stores/index.js'
const demoStore = useDemoStore()
const commonCount = demoStore.count

import { ref, computed, watch, onMounted } from 'vue'
// setup选项可以让以下代码相当于在setup()函数中,是一进入页面就执行的钩子
// 普通非响应式数据
const name = 'Vue3 Starter'
// 普通响应式数据
const greetMsg = ref('你好')
// 计算属性 (避免异步)
const doubleGreetMsg = computed(() => {
  return greetMsg.value + greetMsg.value
})
// 普通函数
function greet() {
  console.log(greetMsg.value)
}
// 异步函数
async function waitAndChange() {
  setTimeout(() => {
    if (greetMsg.value === '你好') {
      greetMsg.value = 'Hello'
    } else {
      greetMsg.value = '你好'
    }
  }, 1000)
}
// 侦听器（三个参数）
watch(
  [greetMsg, doubleGreetMsg],
  (newVal, oldVal) => {
    console.log('greetMsg或doubleGreetMsg发生了变化')
    console.log('新值:', newVal)
    console.log('旧值:', oldVal)
  },
  // { immediate: true, deep: true },
)
// 与setup()同级的配置项
defineOptions({
  name: 'App',
})
// 与setup()同级的生命周期钩子
onMounted(() => {
  console.log('App组件已挂载')
})
</script>

<template>
  <!-- main -->
  <div>
    <div>以下仅为使用示例：</div>
    <div>公共数据count：{{ commonCount }}</div>
    <div>普通非响应式数据name: {{ name }}</div>
    <div>普通响应式数据greetMsg: {{ greetMsg }}</div>
    <span>普通函数</span><button @click="greet">点击打印问候语</button>
    <br />
    <span>异步函数</span><button @click="waitAndChange">点击切换问候语</button>
    <div>计算属性doubleGreetMsg: {{ doubleGreetMsg }}</div>
  </div>
  <!-- 一级路由出口 -->
  <router-view />
</template>

<style lang="scss" scoped></style>
