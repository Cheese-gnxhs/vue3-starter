import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
// setup方式的store
// 在这里面
// ref() 就是 state 属性
// computed() 就是 getters 属性
// function 就是 actions 属性
export const useDemoStore = defineStore('demo', () => {
  const count = ref(1)
  const doubleCount = computed(() => {
    return count.value * 2
  })
  const increment = () => {
    count.value++
  }
  // 必须在return中暴露出需要被外部访问的属性和方法
  return {
    count,
    doubleCount,
    increment,
  }
})
