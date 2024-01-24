import { defineStore } from 'pinia'
import type { WeatherData , DayWeather } from '@/types/types.ts'





export const useWeather = defineStore('useWeather', {

  state: () => ({
    currentWeather: null as null | WeatherData,
    dailyWeather:  {} as DayWeather,
  }),

  actions: {
    // Method to get the current weather data from OpenWeather API
    async getCurrentWeather(coords: {longitude: number, latitude: number}) {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=b470e3487af7137c6c32e3c4bdc88fa8&units=metric`
      ).then((resp) => resp.json());
      this.currentWeather = response
    },


    async getDailyWeather(coords: {longitude: number, latitude: number} ){
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.latitude}&lon=${coords.longitude}&appid=b470e3487af7137c6c32e3c4bdc88fa8&units=metric`
      ).then((resp) => resp.json());

      const dayWeather: DayWeather | null = response as DayWeather;

      dayWeather.list = dayWeather.list.filter(
        (item, index) => index === 0 || index % 8 === 7
      );
      this.dailyWeather =  dayWeather

      console.log(this.dailyWeather)

      }



    },



});