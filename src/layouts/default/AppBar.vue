<template class="app-bar">
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
        @click="link(item.path)"
      >
        {{ item.title }}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-app-bar :elevation="2" color="#49246E">
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
      <v-btn variant="text" @click="link(item.path)">
        {{ item.title }}
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script setup>
  import { ref } from 'vue';
  import utils from '@/utils/utils';
  import { useRouter } from 'vue-router';

  const drawer = ref(null);
  const router = useRouter();
  const { isMobile } = utils.setupMobileUtils();

  const link = (path) => {
    router.value.push(path);
  }

  const items = ref([
    {
      title: 'Home',
      path: '/'
    },
    {
      title: 'Accedi',
      path: '/login'
    },
    {
      title: 'Potenzialità',
      path: '/#potenzialitaSection'
    },
    {
      title: 'Funzionamento',
      path: '/#funzionamentoSection'
    },
    {
      title: 'Prezzi',
      path: '/#prezziSection'
    }
  ]);
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
