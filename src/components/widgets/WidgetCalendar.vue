<template>
  <div class="center-content">

    <div class="stripes-animated z-30" />
  <VaCard >
    <table class="table table-bordered mx-auto">

      <tr>
        <td>
          <VaDatePicker
            v-model="date"
          />
        </td>
      </tr>
    </table>
  </VaCard>
  </div>
</template>

<script setup lang="ts">


import { ref } from 'vue'
import { VaDatePicker } from 'vuestic-ui'

const date = ref()
date.value = new Date()

</script>