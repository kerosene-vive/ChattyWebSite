<template>
    <v-container class="step-container">
        <h2>Prova il tuo Chatty</h2>
        <h4>
            <div>Hai già richiesto la creazione del tuo bot personalizzato?</div>
            <div>Inserisci qui il codice ricevuto tramite mail per usare in esclusiva il chat-bot.</div>
        </h4><br>
        <v-form fast-fail @submit.prevent="tryBot">
            <v-row>
                <v-col cols="12" md="12">
                    <v-text-field
                        v-model="botId"
                        label="Bot id"
                        :rules="botIdRules"
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
    import utils from '@/utils/utils';

    const botId = ref('');
    const botIdRules = [
        (value) => {
            if (value) return true;
            return 'Campo obbligatorio';
        }, async (value) => {
            if (!value) return true;
            const data = await utils.tryBot(value);
            if (data.status == "ok") return true;
            return data.message;
        }
    ];

    const router = useRouter();
    const tryBot = async () => {
        if (!(await utils.validateInputAsync(botId.value, botIdRules))) {
            document.getElementById('fabContainer').style.display = 'none';
            router.push(`/demo/${botId.value}`);
        }
    };
</script>
