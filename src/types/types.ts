export interface WeatherData {
  name: string,
  dt: number,

  clouds: {
    all: number
  }
  main: {
    temp: number,
    temp_max: number,
    temp_min: number,
    feels_like: number,
    humidity:number,
    pressure: number
  },
  weather: Array<{
    icon: string,
    id: number,
    description: string,
    main: string
  }>,
  wind: {
    deg: number,
    speed: number
  }
}