<template>

  <section >


    <main class="swappable-wrapper lg:grid lg:grid-cols-12 gap-x-4 w-full h-full ">

      <div class=" lg:col-span-9 grid grid-rows-3 lg:grid-rows-6 lg:pt-3 lg:pl-3 lg:pb-3 gap-y-4  lg:h-screen  ">

        <div class="row-span-4 box h-80 lg:h-full">
          <WidgetWeather
            @click="drag"
            :style="dragBg ? 'hidden' : ''"
            class="swappable-item transition-colors " >
          </WidgetWeather>

        </div>
        <div class="row-span-10 flex flex-col  lg:grid grid-cols-12 gap-4  ">
          <div class="col-span-5 box h-80 lg:h-full">

            <WidgetTemperature @click="drag"
                               :style="dragBg ? 'hidden' : ''"
                               class=" swappable-item transition-colors"
            />
          </div>
          <div class="col-span-7 box h-80 lg:h-full ">
            <WidgetCalendar
              @click="drag"
              :style="dragBg ? 'hidden' : ''"
              class="swappable-item transition-colors" />
          </div>
        </div>
      </div>
      <div class="col-span-3 grid grid-rows-6  lg:h-screen gap-y-4 lg:pt-3 lg:pb-3 lg:pr-3">
        <div class="row-span-2 box h-80 lg:h-full">
          <WidgetGame
            @click="drag"
            :style="dragBg ? 'hidden' : ''"
            class="swappable-item transition-colors" />
        </div>
        <div class="row-span-4 box h-80 lg:h-full">
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