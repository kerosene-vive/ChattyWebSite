<template>
    <v-footer class="bg-grey-lighten-1 footer-style">
        <v-row justify="center" no-gutters>
            <v-col class="text-center mt-4" cols="12">
                {{ new Date().getFullYear() }} — <strong>Chatty</strong>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script setup>
    //
</script>

<style scoped>
    .footer-style {
        background-color: #49246E;
    }
</style>
