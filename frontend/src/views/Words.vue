<template>
    <div>
      <h1>Vocab Builder</h1>
      <table id="words" class="ui celled table">
        <thead>
          <tr>
            <th>English</th>
            <th>German</th>
            <th colspan="3">Menu</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(word, i) in words" :key="i">
            <td>{{ word.english }}</td>
            <td>{{ word.german }}</td>
            <td width="75" class="center aligned">
              <router-link :to="{ name: 'show', params: { id: word._id }}">
                  <i class="eye icon"></i>
              </router-link>
            </td>
            <td width="75" class="center aligned">
              <router-link :to="{ name: 'edit', params: { id: word._id }}">
                  <i class="edit icon"></i>
              </router-link>
            </td>
            <td width="75" class="center aligned" @click.prevent="onDestroy(word._id)">
              <a href="#"><i class="trash icon"></i></a>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="words.length === 0" class="ui message warning">
          <div class="header">No words found!</div>
          <p>Please add some words to test the system.</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import Swal from 'sweetalert2'; // Thư viện thông báo đẹp
  
  export default {
    name: 'Words',
    data() {
      return {
        words: []
      };
    },
    async mounted() {
      // Tự động lấy danh sách khi vào trang
      this.words = await this.getWords();
    },
    methods: {
      async getWords() {
        try {
          const res = await axios.get('http://localhost:3000/words');
          return res.data;
        } catch (error) {
          console.error(error);
          return [];
        }
      },
      async onDestroy(id) {
        // Hỏi xác nhận trước khi xóa
        const confirm = await Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        });
  
        if (confirm.isConfirmed) {
          try {
            await axios.delete(`http://localhost:3000/words/${id}`);
            Swal.fire('Deleted!', 'Your word has been deleted.', 'success');
            this.words = await this.getWords(); // Load lại bảng
          } catch (error) {
            console.error(error);
          }
        }
      }
    }
  };
  </script>