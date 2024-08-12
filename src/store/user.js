import { defineStore } from 'pinia'
import local from '../utils/local'
export const useUserStore = defineStore('user', {
  state: () => ({
    user: {},
    token: ''
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
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'user',
        storage: localStorage
      },
      {
        key: 'token',
        storage: localStorage
      }
    ]
  }
})
