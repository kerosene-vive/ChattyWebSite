<template>
    <v-footer class="footer-style" elevation="2">
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
        background: #274C75;
        color: white;
    }
</style>
