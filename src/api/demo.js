import request from '@/utils/request'

// 示例：获取个人信息（只是示例，接口用不了！）
export const getUserInfoDetail = () => {
  return request.get('/user/info')
}
