import {defineStore} from 'pinia'
import {reactive} from "vue";


export const useNavigation =

  defineStore("navigation",
    {
      state: () => ({
        navigation: [
          { title: 'Dashboard' , icon : 'dashboard', active : true },
          { title: 'Widgets', icon: 'mail', children: [
              {   title: "Widgets1", icon: 'send' ,   path: "/dashboard/widgets1",  active : true },
              { title: "Widgets2", icon: 'drafts',   path: "/dashboard/widgets2", },
              { title: "Widgets3", icon: 'settings',   path: "/dashboard/widgets3", },
            ],
            isCollapsed: false
          },

        ]
      }),
      getters: {
        menu(state) {
          return state.navigation
        }
      },
      actions: {

      }
    })