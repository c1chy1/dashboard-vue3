<template>
  <div class="center-content">
    <div class="stripes-animated" />
<div class="flex flex-col w-11/12">
    <h1 class="text-2xl mb-2 text-center font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
      Temperature Widget
    </h1>
    <TemperatureLineChart :max-temperatures="Weather.maxTemperatures"/>
</div>
  </div>
</template>

<script setup>

import TemperatureLineChart from '@/components/widgets/Weather/charts/TemperatureLineChart.vue'
import { useWeather } from '@/stores/useWeather.ts'
const Weather = useWeather();



</script>
