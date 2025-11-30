<template>
  <v-card class="pa-4" elevation="3">
    <v-form @submit.prevent="onSubmit">
      <v-alert
        v-if="errorsPresent"
        type="error"
        title="Validation Error"
        text="Please fill out all fields!"
        class="mb-4"
        closable
      ></v-alert>

      <v-text-field
        label="English"
        v-model="word.english"
        prepend-inner-icon="mdi-alpha-e-box text-blue"
        variant="outlined"
        placeholder="Enter English word..."
      ></v-text-field>

      <v-text-field
        label="German"
        v-model="word.german"
        prepend-inner-icon="mdi-alpha-g-box text-yellow"
        variant="outlined"
        placeholder="Enter German word..."
      ></v-text-field>

      <v-text-field
        label="Vietnamese"
        v-model="word.vietnamese"
        prepend-inner-icon="mdi-alpha-v-box text-red"
        variant="outlined"
        placeholder="Enter Vietnamese word..."
      ></v-text-field>

      <v-btn
        type="submit"
        color="primary"
        block
        size="large"
        prepend-icon="mdi-content-save"
      >
        Submit
      </v-btn>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: 'WordForm',
  props: {
    word: {
      type: Object,
      required: false,
      default: () => ({
        english: '',
        german: '',
        vietnamese: ''
      })
    }
  },
  data() {
    return {
      errorsPresent: false
    };
  },
  methods: {
    onSubmit() {
      if (this.word.english === '' || this.word.german === '' || this.word.vietnamese === '') {
        this.errorsPresent = true;
      } else {
        this.errorsPresent = false;
        this.$emit('createOrUpdate', this.word);
      }
    }
  }
};
</script>