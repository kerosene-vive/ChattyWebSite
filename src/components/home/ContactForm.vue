<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card elevation="20" class="form-container">
          <v-card-title style="white-space: normal;">Registrati e richiedi una demo gratuita</v-card-title>
          <v-form fast-fail @submit.prevent="askBot">
            <v-card-text>
              <v-row no-gutters>
                <v-col cols="12" md="5">
                  <v-text-field
                    v-model="name"
                    label="Nome dell'azienda *"
                    :rules="requiredRules"
                  />
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="12" md="5">
                  <v-text-field
                    v-model="site"
                    label="Sito web *"
                    :rules="siteRules"
                  />
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col cols="12" md="12">
                  <v-textarea
                    label="Altre informazioni sulla tua azienda"
                    v-model="info"
                    rows="3"
                    hint="Più informazioni ci fornirai sulla tua azienda, più il tuo Chatty sarà efficente"
                  />
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col cols="12" md="5">
                  <v-text-field
                    v-model="email"
                    label="Email *"
                    :rules="emailRules"
                  />
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="12" md="5">
                  <v-text-field
                    v-model="site"
                    label="Password *"
                    :rules="siteRules"
                  />
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-btn variant="tonal" type="submit" block class="mt-2">Ottieni la tua demo</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
      <v-col class="timeline-container">
        <Timeline />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { ref } from 'vue';
  import utils from '@/utils/utils';
  import Timeline from '@/components/home/Timeline';

  const site = ref('');
  const name = ref('');
  const email = ref('');
  const info = ref('');
  const requiredRules = [
    (value) => {
      if (value) return true;
      return 'Campo obbligatorio';
    },
  ];
  const emailRules = requiredRules.concat([
    (value) => {
      if (/.+@.+\..+/.test(value)) return true;
      return 'E-mail non valida.';
    }
  ]);
  const siteRules = requiredRules.concat([
    (value) => {
      if (/^(https?:\/\/)?([\w-]+\.)+([a-z]{2,})+(\/[\w-]*)*(\?[a-z0-9-]+=[a-z0-9-%]+(&[a-z0-9-]+=[a-z0-9-%]+)*)?$/i.test(value))
          return true;
      return 'Sito non valida.';
    }
  ]);

  const askBot = () => {
    if (
      !utils.validateInput(name.value, requiredRules) &&
      !utils.validateInput(email.value, emailRules) &&
      !utils.validateInput(site.value, siteRules)
    ) {
      const post = utils.postRequest({
          args: {
              name: name.value,
              email: email.value,
              website: site.value,
              description: info.value
          }
      });

      fetch(`${post.hostname}ask-bot`, post.options)
        .then(response => {
          if (!response.ok)
            throw new Error(`Errore nella risposta del server: ${response.status} - ${response.statusText}`);
          return response.json();
        })
        .then(data => {
          console.log('Risposta dal server:', data);
        })
        .catch(error => {
          console.error('Errore nella richiesta:', error);
        });
    }
  };
</script>

<style scoped>
  .form-container {
    max-width: 1100px;
    padding: 10px;
    margin: auto;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .timeline-container {
  display: flex;
  align-items: center;
  justify-content: center;
  }
</style>
