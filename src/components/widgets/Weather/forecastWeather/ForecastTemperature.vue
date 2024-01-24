<template>
    <div class="text-md px-1">
        {{ formattedTemperature.value }}{{ formattedTemperature.unit }}
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

const formattedTemperature = {
  value: computed(() => props.temperature),
  unit: "°C"
};
    

</script>