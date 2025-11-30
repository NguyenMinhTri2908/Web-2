<template>
  <div class="d-flex justify-center">
    <v-card width="600" elevation="4">
      <v-card-item class="bg-primary text-white">
        <v-card-title class="text-h5 font-weight-bold">
          <v-icon icon="mdi-information-outline" class="mr-2"></v-icon>
          Word Details
        </v-card-title>
      </v-card-item>

      <v-card-text class="pt-6">
        <v-list lines="two">
          
          <v-list-item class="mb-2">
            <template v-slot:prepend>
              <v-icon icon="mdi-alpha-e-box" color="cyan-lighten-3" size="x-large"></v-icon>
            </template>
            <v-list-item-title class="text-caption text-grey mb-1">English</v-list-item-title>
            <v-list-item-subtitle class="text-h5 text-high-emphasis opacity-100 font-weight-medium">
              {{ word.english }}
            </v-list-item-subtitle>
          </v-list-item>

          <v-divider inset class="mb-2"></v-divider>

          <v-list-item class="mb-2">
            <template v-slot:prepend>
              <v-icon icon="mdi-alpha-g-box" color="amber-accent-2" size="x-large"></v-icon>
            </template>
            <v-list-item-title class="text-caption text-grey mb-1">German</v-list-item-title>
            <v-list-item-subtitle class="text-h5 text-high-emphasis opacity-100 font-weight-medium">
              {{ word.german }}
            </v-list-item-subtitle>
          </v-list-item>

          <v-divider inset class="mb-2"></v-divider>

          <v-list-item>
            <template v-slot:prepend>
              <v-icon icon="mdi-alpha-v-box" color="red-lighten-2" size="x-large"></v-icon>
            </template>
            <v-list-item-title class="text-caption text-grey mb-1">Vietnamese</v-list-item-title>
            <v-list-item-subtitle class="text-h5 text-high-emphasis opacity-100 font-weight-medium">
              {{ word.vietnamese }}
            </v-list-item-subtitle>
          </v-list-item>

        </v-list>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions class="justify-end pa-4 bg-grey-lighten-5">
        <v-btn
          :to="{ name: 'edit', params: { id: word._id }}"
          color="warning"
          variant="elevated"
          prepend-icon="mdi-pencil"
          class="mr-2"
        >
          Edit
        </v-btn>
        <v-btn
          to="/words"
          color="grey-darken-1"
          variant="outlined"
          prepend-icon="mdi-arrow-left"
        >
          Back
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Show',
  data() {
    return { word: {} };
  },
  async mounted() {
    try {
      const res = await axios.get(`http://localhost:5001/words/${this.$route.params.id}`);
      this.word = res.data;
    } catch (error) {
      console.error(error);
    }
  }
};
</script>