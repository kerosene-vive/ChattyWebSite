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
                        rows="2"
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
        }
    ]);
    const siteRules = requiredRules.concat([
        (value) => {
            if (/^(https?:\/\/)?([\w-]+\.)+([a-z]{2,})+(\/[\w-]*)*(\?[a-z0-9-]+=[a-z0-9-%]+(&[a-z0-9-]+=[a-z0-9-%]+)*)?$/i.test(value))
                return true;
            return 'Sito non valida.';
        }
    ]);

    const validateInput = (value, rules) => {
        const errors = [];
        for (const rule of rules) {
            const result = rule(value);
            if (result !== true)
                errors.push(result);
        }
        return errors.length === 0 ? null : errors;
    };
    const askBot = () => {
        if (
            !validateInput(name.value, requiredRules) &&
            !validateInput(email.value, emailRules) &&
            !validateInput(site.value, siteRules)
        ) {
            const hostname = import.meta.env.VITE_HOSTNAME;
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    args: {
                        name: name.value,
                        email: email.value,
                        website: site.value,
                        description: info.value
                    }
                })
            };

            fetch(`${hostname}ask-bot`, requestOptions)
                .then(response => {
                    if (!response.ok) {
                    throw new Error(`Errore nella risposta del server: ${response.status} - ${response.statusText}`);
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Risposta dal server:', data);
                })
                .catch(error => {
                    console.error('Errore nella richiesta:', error);
                });
        }
    };
</script>
