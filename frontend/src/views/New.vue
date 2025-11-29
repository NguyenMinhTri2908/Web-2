<template>
    <div>
      <h1>Add New Word</h1>
      <word-form @createOrUpdate="createWord"></word-form>
    </div>
  </template>
  
  <script>
  import WordForm from '../components/WordForm.vue';
  import axios from 'axios';
  import Swal from 'sweetalert2';
  
  export default {
    name: 'New',
    components: {
      'word-form': WordForm
    },
    methods: {
      async createWord(word) {
        try {
          // Gửi dữ liệu xuống Backend
          await axios.post('http://localhost:5001/words', word);
          Swal.fire('Success', 'Word created successfully!', 'success');
          this.$router.push('/words'); // Chuyển hướng về trang chủ
        } catch (error) {
          console.error(error);
          Swal.fire('Error', 'Failed to add word.', 'error');
        }
      }
    }
  };
  </script>