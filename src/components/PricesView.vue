<template>
    <v-container>
        <v-divider></v-divider>
        <h3 class="divider-text">Prezzi</h3>
        <v-item-group selected-class="bg-primary">
            <v-row>
            <v-col
                v-for="n in 3"
                :key="n"
                cols="12"
                md="4"
            >
                <v-item v-slot="{ isSelected, selectedClass }">
                <v-card
                    :class="['d-flex align-center', selectedClass]"
                    dark
                    height="200"
                    elevation="20"
                >
                    <div
                    class="text-h3 flex-grow-1 text-center"
                    >
                    Price
                    </div>
                </v-card>
                </v-item>
            </v-col>
            </v-row>
        </v-item-group>
    </v-container>
</template>

<script>
    //
</script>