<template>
    <v-container class="step-container">
        <h2>Richiedi una demo gratuita</h2><br>
        <v-form fast-fail @submit.prevent="askBot">
            <v-row>
                <v-col cols="12" md="4">
                    <v-text-field
                        v-model="name"
                        label="Nome dell'azienda *"
                        :rules="requiredRules"
                    />
                </v-col>
                <v-col cols="12" md="4">
                    <v-text-field
                        v-model="email"
                        label="Email *"
                        :rules="emailRules"
                    />
                </v-col>
                <v-col cols="12" md="4">
                    <v-text-field
                        v-model="site"
                        label="Sito web *"
                        :rules="siteRules"
                    />
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="12">
                    <v-textarea
                        label="Altre informazioni sulla tua azienda"
                        v-model="info"
                        hint="Più informazioni ci fornirai sulla tua azienda, più il tuo Chatty sarà efficente"
                    />
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="12">
                    <v-file-input
                        label="Carica un file che descrive la tua azienda"
                        hint="Più informazioni ci fornirai sulla tua azienda, più il tuo Chatty sarà efficente"
                    />
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="12">
                    <v-btn variant="tonal" type="submit" block class="mt-2">Richiedi</v-btn>
                </v-col>
            </v-row>
        </v-form>
    </v-container>
</template>

<script setup>
    import { ref } from 'vue';

    const site = ref('');
    const name = ref('');
    const email = ref('');
    const info = ref('');
    const requiredRules = [
        (value) => {
            if (value) return true;
            return 'Campo obbligatorio';
        },
    ];
    const emailRules = requiredRules.concat([
        (value) => {
            if (/.+@.+\..+/.test(value)) return true;
            return 'E-mail non valida.';
        },
    ]);
    const siteRules = requiredRules.concat([
        (value) => {
            if (/^(https?:\/\/)?([\w-]+\.)+([a-z]{2,})+(\/[\w-]*)*(\?[a-z0-9-]+=[a-z0-9-%]+(&[a-z0-9-]+=[a-z0-9-%]+)*)?$/i.test(value))
                return true;
            return 'Sito non valida.';
        },
    ]);

    const askBot = () => {
        alert("ciao")
    }
</script>
