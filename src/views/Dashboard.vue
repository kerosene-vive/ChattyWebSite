<template>
    <v-container class="login-container" v-if="status == 'Not Ready' || status == 'Not Verified'">
        <v-sheet width="400" class="mx-auto login-box" elevation="20">
            <h1>Il tuo bot è in fase di preparazione.<br>Ti invieremo una mail appena sarà pronto.</h1>
        </v-sheet>
    </v-container>
    <v-container v-if="status == 'Ready'">
        <h1 class="message-box">Usa questa chat per provare la demo del tuo bot</h1>
        <Demo />
        <PricesView :home="false" />
    </v-container>
    <v-container v-if="status == 'Production'">
    </v-container>
</template>

<script setup>
    import utils from '@/utils/utils';
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import Demo from '@/components/dashboard/Demo';
    import PricesView from '@/components/PricesView';
    
    const status = ref('Ready');
    const route = useRoute();

    onMounted(() => {
        const post = utils.postRequest({
            bot_id: route.params.botId
        });
    });
</script>
