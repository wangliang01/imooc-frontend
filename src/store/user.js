import { defineStore } from 'pinia'
import local from '../utils/local'
import { getUserInfo } from '../api/login'
export const useUserStore = defineStore('user', {
  state: () => ({
    user: local.get('user') || {},
    token: local.get('token') || ''
  }),
  getters: {
    isLogin() {
      return !!this.token
    }
  },
  actions: {
    async fetchUser() {
      const res = await getUserInfo()
      this.setUser(res.data)
    },
    setUser(user) {
      this.user = user
      local.set('user', user)
    },
    setToken(token) {
      this.token = token
      local.set('token', token)
    },
    logout() {
      this.token = ''
      this.user = {}
      local.clear()
    }
  }
  // persist: {
  //   enabled: true,
  //   strategies: [
  //     {
  //       key: 'user',
  //       storage: localStorage
  //     },
  //     {
  //       key: 'token',
  //       storage: localStorage
  //     }
  //   ]
  // }
})
