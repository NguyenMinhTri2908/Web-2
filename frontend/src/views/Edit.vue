<template>
  <div>
    <h1 class="text-h4 mb-4 text-center font-weight-bold text-primary">Edit Word</h1>
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <word-form v-if="word && word._id" :word="word" @createOrUpdate="updateWord"></word-form>
        <v-skeleton-loader v-else type="card"></v-skeleton-loader>
      </v-col>
    </v-row>
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
      // Lấy ID từ đường dẫn URL 
      const id = this.$route.params.id;
      try {
        const res = await axios.get(`http://localhost:5001/words/${id}`);
        this.word = res.data;
      } catch (error) {
        console.error(error);
      }
    },
    methods: {
      async updateWord(word) {
        try {
          await axios.put(`http://localhost:5001/words/${word._id}`, word);
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