<script setup>
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'


import { useWeather } from '@/stores/useWeather.ts'
const Weather = useWeather();

onMounted(() => {
  navigator.geolocation.getCurrentPosition(async (position) => {
    await Weather.getDailyWeather(position.coords)
  })
})
</script>
<template>
  <RouterView  />
</template>

