<template>

    <div class="main-body">
      <Sidebar :minimized="minimized" />
        <div class="content">
            <RouterView />
        </div>
    </div>
</template>
<script setup lang="ts">

import Sidebar from "./sidebar/Sidebar.vue";
import { RouterView , onBeforeRouteUpdate  } from "vue-router";
import Breakpoints from "../constants/breakpoints";
import { ref } from 'vue'



const minimized = ref()

minimized.value = checkIsSmallScreen()

onBeforeRouteUpdate(() => {
  if (checkIsSmallScreen() && !minimized.value) minimized.value = true;
})


function checkIsSmallScreen() {
   return window.innerWidth < Breakpoints.SCREEN_WIDTH_BREAKPOINTS.small;
 }

</script>
<style>
.main-body {
    display: flex;
    height: calc(100vh - var(--header-height));
  overflow-x: hidden;
}

.content {
    flex-grow: 1;
    overflow: auto;
    background-color: var(--background-color);
}
</style>
