<template>
    <div>
        <span class="text-6xl font-normal">{{ roundedTemperature.value }}</span>

        <span class="text-2xl font-light align-top">{{ roundedTemperature.unit }}</span>
    </div>
</template>

<script setup>
    import { computed } from 'vue';

    const props = defineProps({
        temperature: {
            type: Number,
            required: true,
        }
    });

    const roundedTemperature = {
        value: computed(() => Math.round(props.temperature)),
        unit: "°C"
    };
</script>