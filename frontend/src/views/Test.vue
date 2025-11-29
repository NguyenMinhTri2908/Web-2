<template>
  <div>
    <h1>Test Your Vocabulary</h1>

    <div v-if="words.length < 5">
      <div class="ui message warning">
        <div class="header">Not enough words!</div>
        <p>You need to enter at least five words to begin the test.</p>
        <router-link to="/words/new" class="ui button primary">Add more words</router-link>
      </div>
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