<template>
  <div >
    <div class="flex flex-wrap gap-y-4 justify-between">
      <div v-for="day in props.forecastWeather" :key="day.dt">

        <button :class="{
          'bg-opacity-5 border-opacity-25' : !day.selected }" class="p-2 mx-1 rounded-lg border border-teal-500 bg-teal-500 bg-opacity-20 hover:bg-opacity-20 hover:border-opacity-50 ease-in-out duration-100" >
          <ForecastDate :day="day.dt" />
          <ForecastIcon :icon="day.weather" />
          <div class="flex ">
            <ForecastTemperature :temperature="day.main.temp" />
            <span>&#124;</span>
            <ForecastHumidity :humidity="day.main.humidity" />
          </div>
        </button>
      </div>
    </div>
  </div>
</template>
  
<script setup>

  import ForecastDate from './forecastWeather/ForecastDate.vue'
  import ForecastHumidity from './forecastWeather/ForecastHumidity.vue'
  import ForecastTemperature from './forecastWeather/ForecastTemperature.vue'
  import ForecastIcon from './forecastWeather/ForecastIcon.vue'
  const props = defineProps({
    forecastWeather: {
      type: Array,
      required: false
    }
  })

</script>