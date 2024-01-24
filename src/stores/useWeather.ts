import { defineStore } from 'pinia'
import type { WeatherData } from '@/types/types.ts'





export const useWeather = defineStore('useWeather', {

  state: () => ({
    currentWeather: null as null | WeatherData
  }),

  actions: {
    // Method to get the current weather data from OpenWeather API
    async getCurrentWeather(coords: {longitude: number, latitude: number}) {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=b470e3487af7137c6c32e3c4bdc88fa8&units=metric`
      ) .then((resp) => resp.json());
      this.currentWeather = response


      console.log(response)
      console.log(this.currentWeather)

    },




  },
});