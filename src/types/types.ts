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

export interface DayWeather {
  cod: string;
  message: string | number;
  cntA: number;
  list: ListType[];
  city: CityType;
}

export interface ListType {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
  /*    icon?: keyof typeof imageCodes;*/
    }
  ];
  clouds: { all: number };
  wind: { speed: number; deg: number; gust: number };
  visibility: number;
  pop: number;
  rain: { "3h": number };
  snow?: { "3h": number };
  sys: { pod: string };
  dt_txt: string;
}

export interface CityType {
  id: number;
  name: string;
  coord: { lat: number; lon: number };
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}