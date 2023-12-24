<template>
    <v-container>
        <v-divider></v-divider>
        <h3 class="divider-text">Prezzi</h3>
        <v-item-group selected-class="bg-primary">
            <v-row>
            <v-col v-for="(price, i) in prices" :key="i" cols="12" md="4">
                <v-item>
                    <v-card class="d-flex align-center" height="225" elevation="20">
                        <template v-slot:title>
                            {{ price.name }}
                        </template>
                        <template v-slot:subtitle>
                            {{ price.value }},00 €
                        </template>
                        <template v-slot:text>
                            <v-list density="compact">
                                <v-list-subheader>FEATURES</v-list-subheader>
                                <v-list-item v-for="(item, j) in price.features" :key="j">
                                    <template v-slot:prepend v-if="!isMobile">
                                        <v-icon :icon="item.icon"></v-icon>
                                    </template>
                                    <v-list-item-title color="primary">
                                        {{ item.text }}
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </template>
                    </v-card>
                </v-item>
            </v-col>
            </v-row>
        </v-item-group>
    </v-container>
</template>

<script setup>
    import { ref } from 'vue';
    import utils from '@/utils/utils';

    const { isMobile } = utils.setupMobileUtils();
    const prices = ref([
        {
            name: "Basic",
            value: 15,
            features: [
                {
                    icon: "mdi-numeric-1-circle",
                    text: "Un chat-bot personalizzato"
                },
                {
                    icon: "mdi-check-underline-circle",
                    text: "Acquisizione di contatti"
                },
                {
                    icon: "mdi-check-underline-circle",
                    text: "Prenotazione di appuntamenti"
                }
            ]
        },
        {
            name: "Premium",
            value: 30,
            features: [
                {
                    icon: "mdi-numeric-1-circle",
                    text: "Un chat-bot personalizzato"
                },
                {
                    icon: "mdi-check-underline-circle",
                    text: "Acquisizione di contatti"
                },
                {
                    icon: "mdi-check-underline-circle",
                    text: "Prenotazione di appuntamenti"
                },
                {
                    icon: "mdi-check-underline-circle",
                    text: "Automazione delle vendite"
                }
            ]
        },
        {
            name: "Enterprise",
            value: 50,
            features: [
                {
                    icon: "mdi-numeric-3-circle",
                    text: "Tre chat-bot personalizzati"
                },
                {
                    icon: "mdi-check-underline-circle",
                    text: "Acquisizione di contatti"
                },
                {
                    icon: "mdi-check-underline-circle",
                    text: "Prenotazione di appuntamenti"
                },
                {
                    icon: "mdi-check-underline-circle",
                    text: "Automazione delle vendite"
                }
            ]
        }
    ])
</script>

<style scoped>
    @media only screen and (max-width: 600px) {
        .v-list-item-title {
            white-space: normal;
        }
        .d-flex.align-center {
            min-height: 250px;
        }
    }
</style>
