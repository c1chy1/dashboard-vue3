<template>
  <div class="">



    <VaSidebar
      class="sidebar "
      :class="{ 'sidebar--expanded': !minimized }"
      :minimized="minimized"
      minimizedWidth="64px"
    >

      <VaCheckbox
        v-model="minimized"
        class="mt-2"
      />
      <VaAccordion>
        <template v-for="item in items">
          <VaCollapse
            class="sidebar-item"
            v-if="item.children"
            v-model="item.isCollapsed"
            :icon="item.icon"
            :key="item.title + 'collapse'"
            body-color="#00000022"
          >
            <template #header="{ value: isCollapsed }">
              <VaSidebarItem

                active-class="sidebar-item--active-custom"
                :active="isRouteActive(item, item)"
              >
                <VaSidebarItemContent>
                  <VaIcon :name="item.icon" />
                  <VaSidebarItemTitle v-if="!minimized" >{{ item.title }}</VaSidebarItemTitle>
                  <VaSpacer />
                  <VaIcon v-if="!minimized"  :name="isCollapsed ? 'va-arrow-up' : 'va-arrow-down'" />
                </VaSidebarItemContent>
              </VaSidebarItem>
            </template>

            <template #body>
              <VaSidebarItem
                v-for="child in item.children"
                :key="child.title"
                :to="child.path"
                :active="isRouteActive(child, item)"
                @click="activeElement = child.title"
              >
                <VaSidebarItemContent>
                  <VaIcon :name="child.icon" />
                  <VaSidebarItemTitle v-if="!minimized" >{{ child.title }}</VaSidebarItemTitle>
                </VaSidebarItemContent>
              </VaSidebarItem>
            </template>
          </VaCollapse>

          <VaSidebarItem
            v-else
            :key="item.title + 'item'"
            :active="item.title === activeElement"
            @click="activeElement = item.title"
          >
            <VaSidebarItemContent>
              <VaIcon :name="item.icon" />
              <VaSidebarItemTitle  v-if="!minimized">{{ item.title }}</VaSidebarItemTitle>
            </VaSidebarItemContent>
          </VaSidebarItem>
        </template>
      </VaAccordion>
    </VaSidebar>

  </div>


</template>

<script setup lang="ts">

import { ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const activeElement = ref('Address book')
const autoExpand = ref(false)
let minimized = ref(false)


const items = [
  { title: 'Dashboard', icon: 'dashboard' },
  { title: 'Widgets', icon: 'mail', children: [
      {   title: "Widgets1", icon: 'send' ,   path: "/dashboard/widgets1",  },
      { title: "Widgets2", icon: 'drafts',   path: "/dashboard/widgets2", },
      { title: "Widgets3", icon: 'settings',   path: "/dashboard/widgets3", },
    ],
   isCollapsed: false
  },

]


const isRouteActive = (item :any, expandMenu : any) => {
  if (item.title === route.name) {
    // sidebar item's title must match route name in router
    if (expandMenu && !autoExpand.value) {
      expandMenu.collapse = true; // automatically expand sub menu
      autoExpand.value = true; // make sure automatically expand happens only once
    }

    return true;
  }
  return false;
};
</script>
<style scoped lang="scss">


@import "../../../assets/mixins";

.sidebar-item-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
}

.sidebar-item {
  cursor: pointer;
}

/* override UI lib */
.va-collapse__header__content {
  box-shadow: none !important;
  border-radius: 0 !important;
  background-color: transparent !important;
  padding: 0.75rem 1rem !important;
}

.va-sidebar-item-title {
  display: flex;
  align-items: center;
}



.va-collapse__body {
  margin-top: 0 !important;
}


.sidebar {
  width: var(--sidebar-width);
  height: 100%;
  flex-shrink: 0;
}
.va-checkbox {
  --va-checkbox-background: #a28d8d;
  --va-checkbox-square-border: 1px black solid;
}
.sidebar.sidebar--expanded {
  @include respond-to("small") {
    width: 100vw !important;
  }
}

.sidebar-menu {
  padding: 2rem 0;
  overflow-y: auto;
  overflow-anchor: none;
}

</style>