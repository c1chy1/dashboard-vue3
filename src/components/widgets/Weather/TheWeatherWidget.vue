<template>
  <div class="  fullpage-bg absolute h-full flex flex-col overflow-y-scroll justify-center items-center z-10">

      <h1 class="mt-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
        Weather Widget
      </h1>

      <section class="container mx-auto  px-12 "
               v-if="Weather.currentWeather">
        <div class="  flex flex-wrap bg-white  rounded-lg bg-opacity-30 p-4">

          <div class="flex flex-col md:flex-row w-full">
            <div class="flex flex-row">
              <CurrentWeatherIcon
                :weather="Weather.currentWeather.weather"
              />
              <CurrentWeatherTemperature
                :temperature="Weather.currentWeather.main.temp"
              />
            </div>
            <CurrentWeatherDetails
              :feelsLike="Weather.currentWeather.main.feels_like"
              :pressure="Weather.currentWeather.main.pressure"
              :humidity="Weather.currentWeather.main.humidity"
              :windSpeed="Weather.currentWeather.wind.speed"
              :windDeg="Weather.currentWeather.wind.deg"
              :clouds="Weather.currentWeather.clouds.all"
            />

          </div>

          <div class="mt-5 overflow-x-auto">
            <DayPicker
              :forecastWeather="Weather.dailyWeather.list"
            />
          </div>
</div>
      </section>
    <div v-else class="stripes-animated" />
    </div>
</template>

<script setup lang="ts">
import { useWeather } from '@/stores/useWeather.ts';
import { onMounted } from 'vue'
import CurrentWeatherDetails from '@/components/widgets/Weather/currentWeather/CurrentWeatherDetails.vue'
import CurrentWeatherTemperature from '@/components/widgets/Weather/currentWeather/CurrentWeatherTemperature.vue'
import CurrentWeatherIcon from '@/components/widgets/Weather/currentWeather/CurrentWeatherIcon.vue'
import DayPicker from '@/components/widgets/Weather/DayPicker.vue'
const Weather = useWeather();



onMounted(() =>
  navigator.geolocation.getCurrentPosition(async (position) => {
    await Weather.getCurrentWeather(position.coords)
    await Weather.getDailyWeather(position.coords)
  }))
</script>

<style scoped>

.fullpage-bg {
  background-image: linear-gradient(to bottom, #ADD8E6, #FFB6C1);
}
</style>