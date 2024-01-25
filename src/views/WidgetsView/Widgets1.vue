<template>

<section class=" ">

  <main class="swappable-wrapper grid grid-cols-12 gap-4 w-full h-full p-4 ">
    <div class="col-span-9 grid grid-rows-6 h-screen  gap-4">

      <div class="row-span-4 box ">
        <WidgetWeather
          @click="drag"
          :style="dragBg ? 'hidden' : ''"
          class="swappable-item transition-colors " >
        </WidgetWeather>

      </div>
      <div class="row-span-2 grid grid-cols-12 gap-4 ">
        <div class="col-span-5 box ">
          <WidgetTemperature @click="drag"
                        :style="dragBg ? 'hidden' : ''"
                        class=" swappable-item transition-colors"


          />
        </div>
        <div class="col-span-7 box ">
          <WidgetCalendar
             @click="drag"
            :style="dragBg ? 'hidden' : ''"
            class="swappable-item transition-colors" />
        </div>
      </div>
    </div>
    <div class="col-span-3 grid grid-rows-6 gap-4 h-screen ">
      <div class="row-span-2 box ">
        <WidgetGame
           @click="drag"
          :style="dragBg ? 'hidden' : ''"
          class="swappable-item transition-colors" />
      </div>
      <div class="row-span-4 box ">
        <WidgetMusic
          @click="drag"
          :style="dragBg ? 'hidden' : ''"
          class="swappable-item transition-colors" />
      </div>
    </div>
  </main>
</section>
</template>

<script setup>
import { Swappable, Plugins } from '@shopify/draggable';

import WidgetCalendar from '@/components/widgets/WidgetCalendar.vue';
import WidgetTemperature from '@/components/widgets/WidgetTemperature.vue';
import WidgetGame from '@/components/widgets/WidgetGame.vue';
import WidgetMusic from '@/components/widgets/WidgetMusic.vue';
import { onMounted , ref } from 'vue';
import WidgetWeather from '@/components/widgets/WidgetWeather.vue'


const dragBg = ref(false)

function drag() {
  dragBg.value = !dragBg.value
}

onMounted(() => {
  const containerSelector = '.swappable-wrapper';

  new Swappable(document.querySelectorAll(containerSelector), {
    draggable: '.swappable-item',
    mirror: {
      appendTo: containerSelector,
      constrainDimensions: true,
    },
    plugins: [Plugins.ResizeMirror],
  });
});
</script>
<style scoped>



</style>