<template>
    <v-container>
        <v-divider></v-divider>
        <h3 class="divider-text">Prezzi</h3>
        <v-item-group selected-class="bg-primary">
            <v-row>
            <v-col
                v-for="(price, i) in prices"
                :key="i"
                cols="12"
                md="4"
            >
                <v-item v-slot="{ isSelected, selectedClass }">
                    <v-card
                        :class="['d-flex align-center', selectedClass]"
                        dark
                        height="200"
                        elevation="20"
                        :title="price.name"
                    >
                        <template v-slot:subtitle>
                            {{ price.value }},00 €
                        </template>
                        <template v-slot:text>
                            <v-list density="compact">
                                <v-list-subheader>FEATURES</v-list-subheader>
                                <template v-for="(item, j) in price.features" :key="j">
                                    <v-list-item-title :value="item" color="primary">
                                    <template v-slot:prepend>
                                        <v-icon :icon="item.icon"></v-icon>
                                    </template>
                                    {{ item.text }}
                                    </v-list-item-title>
                                </template>
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

    const prices = ref([
        {
            "name": "Basic",
            "value": 15,
            "features": [
                {
                    "icon": "icon",
                    "text": "text"
                },
                {
                    "icon": "icon",
                    "text": "text"
                }
            ]
        },
        {
            "name": "Premium",
            "value": 30,
            "features": [
                {
                    "icon": "icon",
                    "text": "text"
                }
            ]
        },
        {
            "name": "Enterprise",
            "value": 50,
            "features": [
                {
                    "icon": "icon",
                    "text": "text"
                }
            ]
        }
    ])
</script>