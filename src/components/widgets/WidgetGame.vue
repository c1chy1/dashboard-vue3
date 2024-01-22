<template>
  <div class="center-content">
    <div class="stripes-animated" />
    <div class="widget-icon">
      <Gamepad2 :size="50" />
    </div>
  </div>
</template>

<script setup>
import { Gamepad2 } from 'lucide-vue-next';
</script>


<style scoped>


.center-content {
  @apply flex relative overflow-hidden items-center justify-center h-full rounded-md bg-slate-100;
}

.widget-icon {
  @apply bg-slate-200/60 p-5 rounded-full;
}
.stripes-animated {
  display: none;
  background: repeating-linear-gradient(
    45deg,
    rgb(203 213 225),
    rgb(203 213 225) 70px,
    rgb(148 163 184) 70px,
    rgb(148 163 184) 140px
  );
  position: absolute;
  top: 0px;
  left: 0px;
  height: 400%;
  width: 100%;
  opacity: 0.2;
  animation: animateBackground 5s linear infinite;
}

</style>