<template>

  <section >


    <main class="swappable-wrapper md:grid md:grid-cols-12 gap-4 w-full h-full  ">
      <div class=" md:col-span-9 grid grid-rows-3 md:grid-rows-6  md:h-screen xl:p-4 gap-4">

        <div class="row-span-4 box h-80 md:h-full">
          <WidgetWeather
            @click="drag"
            :style="dragBg ? 'hidden' : ''"
            class="swappable-item transition-colors " >
          </WidgetWeather>

        </div>
        <div class="row-span-2 flex flex-col md:grid grid-cols-12 gap-4 ">
          <div class="col-span-5 box h-80 md:h-full">

            <WidgetTemperature @click="drag"
                               :style="dragBg ? 'hidden' : ''"
                               class=" swappable-item transition-colors"
            />
          </div>
          <div class="col-span-7 box h-80 md:h-full">
            <WidgetCalendar
              @click="drag"
              :style="dragBg ? 'hidden' : ''"
              class="swappable-item transition-colors" />
          </div>
        </div>
      </div>
      <div class="col-span-3 grid grid-rows-6 gap-4 md:h-screen xl:p-4 mt-6 lg:mt-0">
        <div class="row-span-2 box h-80 md:h-full">
          <WidgetGame
            @click="drag"
            :style="dragBg ? 'hidden' : ''"
            class="swappable-item transition-colors" />
        </div>
        <div class="row-span-4 box h-80 md:h-full">
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
import { onMounted, ref } from 'vue';
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