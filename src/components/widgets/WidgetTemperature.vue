<template>
  <div class="center-content">
    <div class="stripes-animated" />


    <TemperatureLineChart :max-temperatures="Weather.maxTemperatures"/>
  </div>
</template>

<script setup>
import { onMounted , onBeforeMount} from 'vue'
import TemperatureLineChart from '@/components/widgets/Weather/charts/TemperatureLineChart.vue'
import { useWeather } from '@/stores/useWeather.ts'
const Weather = useWeather();

onMounted(() => {
  navigator.geolocation.getCurrentPosition(async (position) => {
    await Weather.getDailyWeather(position.coords)
  })
})

</script>
