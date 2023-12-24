<template>
    <v-card title="Prova il tuo Chatty" flat>
        <v-sheet width="1000" class="mx-auto">
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
                <v-sheet>
                        <h4>
                            Hai già richiesto la creazione del tuo bot personalizzato?<br>
                            Inserisci qui il codice ricevuto tramite mail per usare in esclusiva il chat-bot
                        </h4>
                    </v-sheet>
                <v-row>
                    <v-col cols="12" md="12">
                        <v-btn
                            variant="tonal"
                            type="submit"
                            block class="mt-2"
                        >Prova</v-btn>
                    </v-col>
                </v-row>
            </v-form>
        </v-sheet>
    </v-card>
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
