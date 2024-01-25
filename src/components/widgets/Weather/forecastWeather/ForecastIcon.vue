<template>
    <div >
        <img :src="primaryForecastIcon" class=" w-24 lg:w-32 h-auto mx-auto">
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';

    const props = defineProps({
        icon: {
            type: Object,
            required: true
        }
    });

    const [primaryIcon] = props.icon;
    const primaryForecastIcon = ref("");

    onMounted( getPrimaryWeather );

    function getPrimaryWeather() {
        primaryForecastIcon.value = `https://openweathermap.org/img/wn/${primaryIcon.icon}@2x.png`;
    }
</script>