import {defineStore} from 'pinia'
import {reactive} from "vue";


export const useNavigation =

  defineStore("navigation",
    {
      state: () => ({
        navigation: reactive([{
          title: 'Dashboard',
          path: "/dashboard",
          icon:'dashboard',
          active:true},
          {
            title: "WIDGETS",
            icon: "statistics",
          sub: [
            {
              title: "Widgets1",
              path: "/dashboard/widgets1",
              active: false,
            },
            {
              title: "Widgets2",
              path: "/dashboard/widgets2",
              active: false,
            },


            {
              title: "Widgets3",
              path: "/dashboard/widgets3",
              active: false,
            },
          ],
          collapse: false,
        }])
      }),
      getters: {
        menu(state) {
          return state.navigation
        }
      },
      actions: {

      }
    })