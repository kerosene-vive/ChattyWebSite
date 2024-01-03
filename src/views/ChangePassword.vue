<template>
    <v-container class="login-container">
        <v-sheet width="400" class="mx-auto login-box" elevation="20">
            <h3>Cambia la tua password</h3><br>
            <v-form @submit.prevent="changePassword">
                <v-text-field v-model="pass" label="Password" type="password" />
                <v-text-field v-model="passConfirm" label="Conferma password" type="password" />
                <v-btn type="submit" block class="mt-2 gradient" variant="tonal">Invia</v-btn>
            </v-form>
            <br><div class="error-message">{{ error }}</div>
            <div class="text-caption">
                {{ message }}<br>
                <a href="/login">Vai al login</a>
            </div>
        </v-sheet>
    </v-container>
</template>

<script setup>
    import { ref } from 'vue';
    import utils from '@/utils/utils';
    import { SHA256 } from 'crypto-js';
    import { useRoute } from 'vue-router';

    const pass = ref('');
    const error = ref('');
    const message = ref('');
    const route = useRoute();
    const passConfirm = ref('');

    const changePassword = () => {
        const token = route.params.token;
        error.value = '';
        message.value = '';
        if (pass.value && passConfirm.value && pass.value == passConfirm.value) {
            const post = utils.postRequest({
                new_password: SHA256(pass.value).toString(),
                reset_pass_token: token
            });

            fetch(`${post.hostname}change-password`, post.options)
                .then(response => {
                    if (!response.ok)
                        throw new Error(`Errore nella risposta del server: ${response.status} - ${response.statusText}`);
                    return response.json();
                })
                .then(data => {
                    if (data.status == 'ok')
                        message.value = data.message;
                    else
                        error.value = data.error;
                })
                .catch(error => {
                    console.error('Errore nella richiesta:', error);
                });
        } else if (pass.value && passConfirm.value && pass.value != passConfirm.value)
            error.value = 'Le password non coincidono';
    };
</script>
