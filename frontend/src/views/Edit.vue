<template>
    <div>
      <h1>Edit Word</h1>
      <word-form v-if="word && word._id" :word="word" @createOrUpdate="updateWord"></word-form>
    </div>
  </template>
  
  <script>
  import WordForm from '../components/WordForm.vue';
  import axios from 'axios';
  import Swal from 'sweetalert2';
  
  export default {
    name: 'Edit',
    components: {
      'word-form': WordForm
    },
    data() {
      return {
        word: {}
      };
    },
    async mounted() {
      // Lấy ID từ đường dẫn URL (ví dụ /words/123/edit -> lấy 123)
      const id = this.$route.params.id;
      try {
        const res = await axios.get(`http://localhost:3000/words/${id}`);
        this.word = res.data;
      } catch (error) {
        console.error(error);
      }
    },
    methods: {
      async updateWord(word) {
        try {
          await axios.put(`http://localhost:3000/words/${word._id}`, word);
          Swal.fire('Success', 'Word updated successfully!', 'success');
          this.$router.push('/words');
        } catch (error) {
          console.error(error);
          Swal.fire('Error', 'Failed to update word.', 'error');
        }
      }
    }
  };
  </script>