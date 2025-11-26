<template>
    <form action="#" @submit.prevent="onSubmit" class="ui form">
      <p v-if="errorsPresent" class="error">Please fill out both fields!</p>
  
      <div class="field">
        <label>English</label>
        <input type="text" placeholder="Enter word..." v-model="word.english" />
      </div>
  
      <div class="field">
        <label>German</label>
        <input type="text" placeholder="Enter word..." v-model="word.german" />
      </div>
  
      <button class="ui button primary">Submit</button>
    </form>
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
          german: ''
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
        if (this.word.english === '' || this.word.german === '') {
          this.errorsPresent = true;
        } else {
          this.errorsPresent = false;
          // Gửi dữ liệu ra component cha (New hoặc Edit)
          this.$emit('createOrUpdate', this.word);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .error {
    color: red;
    font-weight: bold;
  }
  </style>