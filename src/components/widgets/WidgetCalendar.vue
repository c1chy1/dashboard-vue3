<template>

  <VaCard style="width: 100%;" class="pt-4">
    <table class="table table-bordered mx-auto ">

      <tr>
        <td>
          <VaDatePicker
            v-model="date"
          />
        </td>
      </tr>
    </table>
  </VaCard>
</template>

<script setup lang="ts">


import { ref } from 'vue'
import { VaDatePicker } from 'vuestic-ui'

const date = ref()

date.value = new Date()



</script>