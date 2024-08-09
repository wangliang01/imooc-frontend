import { defineStore } from 'pinia'
import local from '../utils/local'
export const useUserStore = defineStore('user', {
  state: () => ({
    user: {},
    token: local.get('token') || ''
  }),
  getters: {
    isLogin() {
      return !!this.token
    }
  },
  actions: {
    setUser(user) {
      this.user = user
      local.set('user', user)
    },
    setToken(token) {
      this.token = token
      local.set('token', token)
    }
  }
})
