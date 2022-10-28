
import { defineStore } from 'pinia'
import { IndexData } from '~/typings/data'

export const useCartStore = defineStore('cartStore', {
  state: () => {
    return { data: {} } as IndexData
  },
  actions: {
    setData (payload: any) {
      this.data = payload.data
    }
  }
})
