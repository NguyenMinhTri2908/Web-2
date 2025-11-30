<template>
  <div>
    <h1 class="text-h4 mb-4 text-primary font-weight-bold">
      Words List
    </h1>
    
    <v-alert
      v-if="$route.query.q"
      color="info"
      icon="mdi-magnify"
      variant="tonal"
      class="mb-4"
    >
      Search result for: <strong>"{{ $route.query.q }}"</strong>
    </v-alert>

    <v-card elevation="3">
      <v-table hover>
        <thead>
          <tr class="bg-primary">
            <th class="text-white text-h6">
              <v-icon icon="mdi-alpha-e-box " class="mr-1"></v-icon>
              English
            </th>
            <th class="text-white text-h6">
              <v-icon icon="mdi-alpha-g-box " class="mr-1" ></v-icon>
              German
            </th>
            <th class="text-white text-h6">
              <v-icon icon="mdi-alpha-v-box " class="mr-1"></v-icon>
              Vietnamese
            </th>
            <th class="text-white text-center text-h6" width="250">
              <v-icon icon="mdi-cog" class="mr-1"></v-icon>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="word in words" :key="word._id">
            <td class="text-body-1 font-weight-medium">{{ word.english }}</td>
            <td class="text-body-1">{{ word.german }}</td>
            <td class="text-body-1">{{ word.vietnamese }}</td>
            <td class="text-center">
              <v-tooltip text="View Details" location="top">
                <template v-slot:activator="{ props }">
                  <v-btn
                    v-bind="props"
                    :to="{ name: 'show', params: { id: word._id } }"
                    icon="mdi-eye"
                    color="info"
                    variant="text"
                    class="mr-1"
                  ></v-btn>
                </template>
              </v-tooltip>

              <v-tooltip text="Edit Word" location="top">
                <template v-slot:activator="{ props }">
                  <v-btn
                    v-bind="props"
                    :to="{ name: 'edit', params: { id: word._id } }"
                    icon="mdi-pencil"
                    color="warning"
                    variant="text"
                    class="mr-1"
                  ></v-btn>
                </template>
              </v-tooltip>

              <v-tooltip text="Delete Word" location="top">
                <template v-slot:activator="{ props }">
                  <v-btn
                    v-bind="props"
                    @click="deleteWord(word._id)"
                    icon="mdi-delete"
                    color="error"
                    variant="text"
                  ></v-btn>
                </template>
              </v-tooltip>
            </td>
          </tr>
          <tr v-if="words.length === 0">
            <td colspan="4" class="text-center pa-6 text-h6 text-grey">
              <v-icon icon="mdi-emoticon-sad-outline" size="large" class="mb-2"></v-icon><br>
              No words found. Try adding some!
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
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
        const query = this.$route.query.q;
        let url = 'http://localhost:5001/words';
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
          this.getWords();
        } catch (error) {
          Swal.fire('Error', 'Failed to delete word', 'error');
        }
      }
    }
  },
  mounted() {
    this.getWords();
  },
  watch: {
    '$route.query.q': 'getWords'
  }
};
</script>