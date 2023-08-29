import { defineStore } from 'pinia'
// Import axios to make HTTP requests
import axios from "axios"

export const useUserStore = defineStore("user", {
    state: () => ({
        users: [],
        loading: false,
        title:'Pinia tutorial',
    }),
    getters: {
    
    },
    actions: {
      async fetchUsers() {
        try {
          this.loading = true
          const data = await axios.get('https://jsonplaceholder.typicode.com/users')
          this.users = data.data
          this.loading = false
          }
          catch (error) {
            console.error('Error is :',error)
        }
      }
    },
})