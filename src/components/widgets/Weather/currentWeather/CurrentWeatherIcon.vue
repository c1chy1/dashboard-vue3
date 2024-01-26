<template>
    <div>
        <img v-if="primaryWeatherIcon" :src="primaryWeatherIcon" class="w-32 lg:w-40 mx-auto h-auto">
        <span v-else>Icon Error!</span>
    </div>
</template>

<script setup>
    import { ref, onMounted, watchEffect } from 'vue';

    const props = defineProps({
        weather: {
            type: Array,
            required: true,
        }
    });

    const primaryWeather = ref(props.weather[0]);
    const primaryWeatherIcon = ref(null);

    onMounted( getPrimaryWeather );

    watchEffect(() => {
        primaryWeather.value = props.weather[0];
        getPrimaryWeather();
    });

    function getPrimaryWeather() {
        if( !props.weather.length ) {
            console.error("Error: Can not get the primary weather.");
            return;
        }

        primaryWeatherIcon.value = constructWeatherIconURL(primaryWeather.value.icon);
    }

    function constructWeatherIconURL(icon) {
        return `https://openweathermap.org/img/wn/${icon}@2x.png`;
    }
</script>