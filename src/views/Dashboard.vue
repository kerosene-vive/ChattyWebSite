<template>
    <v-container class="login-container" v-if="status == 'Not Ready' || status == 'Not Verified'">
        <v-sheet width="400" class="mx-auto login-box" elevation="20">
            <h1>Il tuo bot è in fase di preparazione.<br>Ti invieremo una mail appena sarà pronto.</h1>
        </v-sheet>
    </v-container>
    <v-container v-if="status == 'Ready'">
        <Demo v-if="startDemo" />
        <v-container v-else  class="message-box">
            <h1>Clicca qui per avviare una demo</h1><br>
            <v-btn variant="outlined" type="submit" block class="mt-2 gradient" @click="btnDemo">
                Prova ora
            </v-btn><br>
        </v-container>
        <PricesView :home="false" />
    </v-container>
    <v-container v-if="status == 'Production'">
        <v-sheet width="400" class="mx-auto login-box" elevation="20">
            <h1>Il tuo bot è in fase di produzione.<br>Copia questo script javascript per integrarlo sul tuo sito web.</h1>
        </v-sheet>
    </v-container>
</template>

<script setup>
    import utils from '@/utils/utils';
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import Demo from '@/components/dashboard/Demo';
    import PricesView from '@/components/PricesView';
    
    const status = ref('');
    const route = useRoute();
    const startDemo = ref(false);

    onMounted(async () => {
        status.value = (await utils.tryBot(route.params.botId)).status;
    });

    const btnDemo = async () => {
        startDemo.value = true;
    };
</script>
