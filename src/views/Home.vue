<template>
  <TripleGrid id="demoSection" />
  <ContactForm />
  <Timeline />
  <PotentialCarousel id="potenzialitaSection" />
  <FunctionalCard id="funzionamentoSection" />
  <PricesView id="prezziSection" />
  <AddingValue />
  <br>
</template>

<script setup>
  import Timeline from '@/components/Timeline.vue';
  import TripleGrid from '@/components/TripleGrid.vue';
  import PricesView from '@/components/PricesView.vue';
  import AddingValue from '@/components/AddingValue.vue';
  import ContactForm from '@/components/ContactForm.vue';
  import FunctionalCard from '@/components/FunctionalCard.vue';
  import PotentialCarousel from '@/components/PotentialCarousel.vue';
</script>
