import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import navList from "../../data/navigationList.js";


export const useNavigation = defineStore('menu', () => {

  const menu = ref()

      menu.value = navList

  console.log(menu.value)


  return { menu }
})
