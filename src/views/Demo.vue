<template>
    <v-container>
        <v-row no-gutters class="chat-box">
            <v-col cols="12">
                <div class="message-box" ref="scrollContainer">
                    <v-list lines="ten" v-if="flagBot.status == 'ok'">
                        <v-list-item
                            v-for="(message, i) in messages"
                            :key="i"
                            :title="message.bot ? 'Bot' : 'Utente'"
                            :subtitle="message.message"
                        />
                    </v-list>
                    <div v-else>
                        {{ flagBot.message }}
                    </div>
                </div>
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
                                    <v-btn
                                        type="submit"
                                        density="comfortable"
                                        block
                                        class="mt-2"
                                        icon="mdi-plus"
                                        :disabled="loading"
                                        :loading="loading"
                                    />
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
    import { ref, onMounted } from 'vue';
    import utils from '@/utils/utils';
    import { useRoute } from 'vue-router';

    var threadId = false;
    const messages = ref([]);
    const route = useRoute();
    const loading = ref(false);
    const flagBot = ref(false);
    const userMessage = ref('');
    const scrollContainer = ref(null);

    onMounted(async () => {
        flagBot.value = await utils.tryBot(route.params.botId);
    });

    const addMessage = (bot, message) => {
        messages.value.push({
            bot: bot,
            message: message
        });
        requestAnimationFrame(() => {
            scrollContainer.value.scrollIntoView({
                behavior: 'smooth',
                block: 'end'
            });
        });
    };

    const sendMessage = () => {
        if (userMessage.value && flagBot.value.status == 'ok') {
            addMessage(false, userMessage.value);
            loading.value = true;
            var body = {
                message: userMessage.value,
                bot_id: route.params.botId
            };
            userMessage.value = '';
            if (threadId) body.thread_id = threadId;
            const post = utils.postRequest(body);

            fetch(`${post.hostname}chat`, post.options)
                .then(response => {
                        if (!response.ok) {
                            throw new Error(`Errore nella risposta del server: ${response.status} - ${response.statusText}`);
                        }
                        return response.json();
                    })
                    .then(data => {
                        if (!threadId) threadId = data.thread_id;
                        loading.value = false;
                        addMessage(true, data.response);
                    })
                    .catch(error => {
                        console.error('Errore nella richiesta:', error);
                    });
        }
    };
</script>

<style scoped>
    .chat-box {
        height: 70vh;
        overflow-y: auto;
    }
    .message-box {
        max-width: 1100px;
        margin: auto;
    }
</style>
