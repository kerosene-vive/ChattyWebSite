<template>
    <v-container class="login-container" v-if="status == 'Not Ready' || status == 'Not Verified'">
        <v-sheet width="400" class="mx-auto login-box" elevation="20">
            <h1>Il tuo bot è in fase di preparazione.<br>Ti invieremo una mail appena sarà pronto.</h1>
        </v-sheet>
    </v-container>
    <v-container v-if="status == 'Ready'">
        <div v-if="startDemo">
            <h1 class="message-box">Usa questa chat per provare la demo del tuo bot</h1>
            <Demo />
        </div>
        <div v-else>
            <h1 class="message-box">Clicca qui per avviare una demo</h1>
            <v-btn variant="tonal" type="submit" block class="mt-2 gradient" @click="btnDemo">
                Ottieni la tua demo
            </v-btn>
        </div>
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
    
    const status = ref('Ready');
    const route = useRoute();
    const startDemo = ref(false);

    onMounted(async () => {
    });

    const btnDemo = () => {
        startDemo.value = true;
    };
</script>
