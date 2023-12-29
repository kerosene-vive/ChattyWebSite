<template>
    <v-container class="step-container">
        <h2>Cosa ne pensi della demo?</h2>
        <v-row>
            <v-col cols="12" md="12">
                <v-textarea
                    label="Dacci un tuo parere"
                    v-model="review"
                    rows="3"
                    hint="Suggerisci qualcosa per migliorare ulteriormente la versione finale del tuo chat-bot"
                />
            </v-col>
        </v-row>
        <h2>Adesso crea un account per procedere con l'integrazione</h2>
        <v-row>
            <v-col cols="12" md="12">
                <v-text-field
                    v-model="botId"
                    label="Bot id"
                    :rules="botIdRules"
                />
            </v-col>
        </v-row>
        <h4>Se necessiti supporto per la fase di integrazione non esitare a contattare il nostro team!</h4>
    </v-container>
</template>

<script setup>
    //
</script>
