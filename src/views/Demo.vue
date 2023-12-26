<template>
    <v-container>
        <v-row no-gutters class="chat-box">
            <v-col cols="12">
                <v-list lines="one" class="message-box">
                    <v-list-item
                        v-for="(message, i) in messages"
                        :key="i"
                        :title="message.bot ? 'Bot' : 'Utente'"
                        :subtitle="message.message"
                    ></v-list-item>
                </v-list>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col cols="12">
                <v-card class="message-box">
                    <v-container class="step-container">
                        <v-form @submit.prevent="sendMessage">
                            <v-row>
                                <v-col class="pa-2 ma-2" cols="13">
                                    <v-text-field v-model="userMessage" label="Message" />
                                </v-col>
                                <v-col class="pa-2 ma-2" cols="auto">
                                    <v-btn type="submit" density="comfortable" block class="mt-2" icon="mdi-plus" />
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
    import { ref } from 'vue';
    import utils from '@/utils/utils';

    const messages = ref([
        {
            bot: true,
            message: 'Ciao fra'
        },
        {
            bot: false,
            message: 'Ciao bros'
        }
    ]);
    const userMessage = ref('');
    const sendMessage = () => {
        if (userMessage.value) {
            messages.value.push({
                bot: false,
                message: userMessage.value
            });

            messages.value.push({
                bot: true,
                message: 'Risposta del bot'
            });
            userMessage.value = '';
        }
    };
</script>

<style scoped>
    .chat-box {
        height: 75vh;
    }
    .message-box {
        max-width: 1100px;
        margin: auto;
    }
</style>
