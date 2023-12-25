<template>
  <v-container>
    <v-stepper
      prev-text="Indietro"
      next-text="Avanti"
      :items="['Step 1', 'Step 2', 'Step 3']"
      elevation="20"
    >
      <template v-slot:item.1>
        <Step1 />
      </template>
      <template v-slot:item.2>
        <Step2 />
      </template>
      <template v-slot:item.3>
        <Step3 />
      </template>
    </v-stepper>
  </v-container>
</template>

<script setup>
  import Step1 from '@/components/steps/Step1.vue';
  import Step2 from '@/components/steps/Step2.vue';
  import Step3 from '@/components/steps/Step3.vue';
</script>
