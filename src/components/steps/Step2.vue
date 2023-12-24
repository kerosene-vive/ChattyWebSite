<template>
    <v-container class="step-container">
        <h2>Prova il tuo Chatty</h2>
        <h4>
            Hai già richiesto la creazione del tuo bot personalizzato?<br>
            Inserisci qui il codice ricevuto tramite mail per usare in esclusiva il chat-bot
        </h4><br>
        <v-form fast-fail @submit.prevent="tryBot">
            <v-row>
                <v-col cols="12" md="12">
                    <v-text-field
                        v-model="botId"
                        label="Bot id"
                        :rules="requiredRules"
                    />
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="12">
                    <v-btn variant="tonal" type="submit" block class="mt-2">Prova</v-btn>
                </v-col>
            </v-row>
        </v-form>
    </v-container>
</template>

<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    const botId = ref('');
    const requiredRules = [
        (value) => {
            if (value) return true;
            return 'Campo obbligatorio';
        }
    ];
    const router = useRouter();

    const tryBot = async () => {
        if (botId.value)
            router.push(`/demo/${botId.value}`);
    };
</script>
