<template>
  <div>
    <h1 class="text-h4 mb-4 text-primary font-weight-bold">
      <v-icon icon="mdi-head-question" class="mr-2"></v-icon>
      Test Your Vocabulary
    </h1>

    <div v-if="words.length < 5">
      <v-alert
        type="warning"
        title="Not enough words!"
        text="You need to enter at least five words to begin the test."
        variant="tonal"
        border="start"
        elevation="2"
      >
        <div class="mt-2">
          <v-btn to="/words/new" color="warning" variant="flat">
            Add more words
          </v-btn>
        </div>
      </v-alert>
    </div>
    
    <div v-else>
      <vocab-test :words="words"></vocab-test>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import VocabTest from '../components/VocabTest.vue';

export default {
  name: 'Test',
  components: {
    'vocab-test': VocabTest
  },
  data() {
    return {
      words: []
    };
  },
  async mounted() {
    try {
      const res = await axios.get('http://localhost:5001/words');
      this.words = res.data;
    } catch (error) {
      console.error(error);
    }
  }
};
</script>