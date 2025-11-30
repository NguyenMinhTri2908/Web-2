<template>
  <div>
    <h1 class="text-h4 mb-4 text-center font-weight-bold text-primary">Add New Word</h1>
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <word-form @createOrUpdate="createWord"></word-form>
      </v-col>
    </v-row>
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