<template>
    <v-container>
        <v-row no-gutters class="chat-box">
            <v-col cols="12">
                <div class="message-box" ref="scrollContainer">
                    <v-list lines="ten" v-if="flagBot.status == 'Ready'" class="demo-message">
                        <v-list-item
                            v-for="(message, i) in messages"
                            :key="i"
                            :title="message.bot ? 'Bot' : 'Utente'"
                        >
                            <template v-slot:subtitle>
                                <div v-html="marked.parseMd(message.message)"></div>
                            </template>
                        </v-list-item>
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
                        <v-form @submit.prevent="sendMessageByFormDemo">
                            <v-row>
                                <v-col class="pa-2 ma-2" cols="13">
                                    <v-text-field v-model="userMessage" label="Message" />
                                </v-col>
                                <v-col class="pa-2 ma-2" cols="auto">
                                    <v-btn
                                        type="submit"
                                        density="comfortable"
                                        block
                                        style="background-color: #49246E; color: white"
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
    import utils from '@/utils/utils';
    import marked from '@/chat/marked';
    import sender from '@/chat/sender';
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';

    var botId = null;
    var threadId = false;
    const messages = ref([]);
    const route = useRoute();
    const loading = ref(false);
    const flagBot = ref(false);
    const userMessage = ref('');
    const scrollContainer = ref(null);

    onMounted(async () => {
        botId = route.params.botId;
        flagBot.value = await utils.tryBot(botId);
        if (flagBot.value) {
            loading.value = true;
            sender.sendMessage(botId, threadId, 'Ciao', addMessageDemo);
        }
    });

    const addMessageDemo = (message, bot = true) => {
        messages.value.push({
            bot: bot,
            message: message
        });
        requestAnimationFrame(() => {
            sender.scrollToBottom(scrollContainer.value);
        });
        loading.value = false;
    };

    const sendMessageByFormDemo = async () => {
        if (userMessage.value && flagBot.value.status == 'ok') {
            addMessageDemo(userMessage.value, false);
            loading.value = true;
            sender.sendMessage(botId, threadId, userMessage.value, addMessageDemo);
            userMessage.value = '';
        }
    };
</script>

<style scoped>
    .chat-box {
        height: 45vh;
        overflow-y: auto;
    }
    .demo-message {
        background: none;
        color: white;
    }
</style>
