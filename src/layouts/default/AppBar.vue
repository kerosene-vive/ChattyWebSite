<template>
  <v-navigation-drawer
    v-model="drawer"
    location="bottom"
    temporary
  >
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item"
        @click="link(item.hash)"
      >
        {{ item.title }}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-app-bar :elevation="2">
    <v-app-bar-nav-icon
      v-if="isMobile"
      @click.stop="drawer = !drawer"
    />
    <v-app-bar-title>CHATTY</v-app-bar-title>
    <div
      v-if="!isMobile"
      class="desktop-menu"
      v-for="(item, index) in items"
      :key="index"
    >
      <v-btn variant="text" @click="link(item.hash)">
        {{ item.title }}
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import { ref, onMounted, onBeforeUnmount } from 'vue';

  const isMobile = ref(false);
  const drawer = ref(null);
  const items = ref([
    {
      title: 'Demo',
      hash: 'demoSection'
    },
    {
      title: 'Potenzialità',
      hash: 'potenzialitaSection'
    },
    {
      title: 'Funzionamento',
      hash: 'funzionamentoSection'
    },
    {
      title: 'Prezzi',
      hash: 'prezziSection'
    }
  ]);

  const checkMobile = () => {
    isMobile.value = window.innerWidth < 600;
  };

  onMounted(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);
  });
  onBeforeUnmount(() => {
    window.removeEventListener('resize', checkMobile);
  });

  const router = useRouter();
  const link = (hash) => {
    router.push(`/#${hash}`);
  }
</script>

<style scoped>
  .desktop-menu {
    padding-right: 20px;
  }
  .router-link-exact-active,
  .router-link-active,
  .router-link-exact-active a {
    text-decoration: none;
    color: inherit;
  }
  .router-link:hover {
    text-decoration: underline;
  }
</style>
