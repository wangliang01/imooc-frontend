import router from './index'
import local from '../utils/local'

// 定义一个函数来获取 token 并处理可能的异常
function getToken() {
  try {
    return local.get('token')
  } catch (error) {
    console.error('Error while getting token:', error)
    return null
  }
}

export default () => {
  router.beforeEach((to, from, next) => {
    let isAuthenticated = false

    // 默认需要认证，除非路由有 noAuth 标记
    if (to.matched.some((route) => route.meta.noAuth)) {
      console.log('当前路由或其父路由不需要认证')
      // 如果不需要认证，则直接设置为已认证
      isAuthenticated = true
    } else {
      // 需要认证的情况下，检查 token 是否存在
      const token = getToken()
      isAuthenticated = !!token
    }

    // 在开发环境中输出日志，在生产环境中注释掉
    if (process.env.NODE_ENV !== 'production') {
      console.log('🚀 ~ router.beforeEach ~ isAuthenticated:', isAuthenticated)
    }

    if (to.name !== 'login' && !isAuthenticated) {
      next({ name: 'login' })
    } else {
      next()
    }
  })

  router.afterEach((to, from) => {
    // 如果需要在页面跳转后执行某些操作，可以在这里添加代码
  })
}
