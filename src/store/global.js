import { defineStore } from "pinia"
import local from "../utils/local"
export const useGlobalStore = defineStore('global', {
  state: () => ({
    sid: local.get('sid') || '',
  }),
  actions: {
    setSid(sid) {
      this.sid = sid
      local.set('sid', sid)
    }
  }
})