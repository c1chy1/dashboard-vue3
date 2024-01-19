<template>
    <va-sidebar
        class="sidebar"
        :class="{ 'sidebar--expanded': !minimized }"
        :minimized="minimized"
        minimizedWidth="auto"
    >
        <div class="sidebar-menu">
            <Menu  :items="items" />


        </div>
    </va-sidebar>
</template>

<script setup lang="ts">

import Menu from '@/components/layouts/sidebar/Menu.vue'

import { useNavigation } from '@/stores/useNav.js'


  const items = useNavigation().menu

defineProps({
  minimized: {
    type: Boolean
  }
})

console.log(items)



</script>


<style lang="scss">
@import "../../../assets/mixins";
.sidebar {
    width: var(--sidebar-width);
    height: 100%;
    flex-shrink: 0;
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
