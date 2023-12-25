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
  import Timeline from '@/components/home/Timeline.vue';
  import TripleGrid from '@/components/home/TripleGrid.vue';
  import PricesView from '@/components/home/PricesView.vue';
  import AddingValue from '@/components/home/AddingValue.vue';
  import ContactForm from '@/components/home/ContactForm.vue';
  import FunctionalCard from '@/components/home/FunctionalCard.vue';
  import PotentialCarousel from '@/components/home/PotentialCarousel.vue';
</script>
