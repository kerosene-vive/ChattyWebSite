<template>
    <v-container>
        <v-divider></v-divider>
        <h3 class="divider-text">Potenzialità</h3>
        <v-card elevation="20">
            <v-carousel
                :continuous="false"
                hide-delimiter-background
                delimiter-icon="mdi-square"
                height="300"
            >
                <v-carousel-item
                    v-for="(slide, i) in slides"
                    :key="i"
                >
                    <v-sheet
                        :color="colors[i]"
                        height="100%"
                        tile
                    >
                        <div class="d-flex fill-height justify-center align-center">
                        <div class="text-h2">
                            {{ slide }}
                        </div>
                        </div>
                    </v-sheet>
                </v-carousel-item>
            </v-carousel>
        </v-card>
    </v-container>
</template>

<script setup>
    import { ref } from 'vue';

    const colors = ref([
        'green',
        'secondary',
        'yellow darken-4',
        'red lighten-2',
        'orange darken-1'
    ]);
    const slides = ref([
        'Automazione delle vendite',
        'Acquisizione di contatti',
        'Prenotazione di appuntamenti'
    ]);
</script>
