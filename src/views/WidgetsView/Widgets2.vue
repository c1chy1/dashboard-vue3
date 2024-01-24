<script setup lang="ts">

import TheWeatherWidget from '@/components/widgets/Weather/TheWeatherWidget.vue'

</script>

<template>
  <main class="main">

<TheWeatherWidget/>

  </main>
</template>

<style lang="scss">
.main {
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));
  height: 100vh;
}

.search-bar {
  color: #313131;
  font-size: 20px;
  border-radius: 0 16px 0 16px;
  background-color: rgba(255, 255, 255, .5);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, .25);
  transition: .4s;

  &:focus {
    box-shadow: 0px 0px 16px rgba(0, 0, 0, .25);
    background-color: rgba(255, 255, 255, .9);
    border-radius: 16px 0 16px 0;

  }
}

.location {
  text-shadow: 1px 3px rgba(0, 0, 0, .25);
}

.temp {
  text-shadow: 3px 6px rgba(0, 0, 0, .25);
  background-color: rgba(255, 255, 255, .25);
  box-shadow: 3px 6px rgba(0, 0, 0, .25);
}

.weather {
  text-shadow: 3px 6px rgba(0, 0, 0, .25);

}
</style>