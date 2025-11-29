<template>
  <div>
    <h1>Words List</h1>
    
    <p v-if="$route.query.q">
      Search result for: "<strong>{{ $route.query.q }}</strong>"
    </p>

    <table class="ui celled table">
      <thead>
        <tr>
          <th>English</th>
          <th>German</th>
          <th>Vietnamese</th>
          <th width="220">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="word in words" :key="word._id">
          <td>{{ word.english }}</td>
          <td>{{ word.german }}</td>
          <td>{{ word.vietnamese }}</td>
          <td>
            <router-link 
              :to="{ name: 'show', params: { id: word._id } }" 
              class="ui mini button blue"
            >
              View
            </router-link>
            <router-link 
              :to="{ name: 'edit', params: { id: word._id } }" 
              class="ui mini button orange"
            >
              Edit
            </router-link>
            <button @click="deleteWord(word._id)" class="ui mini button red">
              Delete
            </button>
          </td>
        </tr>
        <tr v-if="words.length === 0">
          <td colspan="3" class="center aligned">No words found.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  name: 'Words',
  data() {
    return {
      words: []
    };
  },
  methods: {
    async getWords() {
      try {
        // 1. Lấy từ khóa từ thanh địa chỉ (URL)
        const query = this.$route.query.q;
        let url = 'http://localhost:5001/words';
        
        // 2. Nếu có từ khóa, dùng API tìm kiếm riêng
        if (query) {
          url = `http://localhost:5001/words/search?q=${query}`;
        }

        const response = await axios.get(url);
        this.words = response.data;
      } catch (error) {
        console.error(error);
        Swal.fire('Error', 'Failed to load words', 'error');
      }
    },
    async deleteWord(id) {
      const confirm = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!'
      });

      if (confirm.isConfirmed) {
        try {
          await axios.delete(`http://localhost:5001/words/${id}`);
          Swal.fire('Deleted!', 'Your word has been deleted.', 'success');
          // Tải lại danh sách sau khi xóa
          this.getWords();
        } catch (error) {
          console.error(error);
          Swal.fire('Error', 'Failed to delete word', 'error');
        }
      }
    }
  },
  mounted() {
    this.getWords();
  },
  // Quan trọng: Theo dõi sự thay đổi trên URL để tìm kiếm lại ngay lập tức
  watch: {
    '$route.query.q': 'getWords'
  }
};
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
}
</style>