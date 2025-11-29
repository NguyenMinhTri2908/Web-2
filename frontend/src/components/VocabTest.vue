<template>
  <div>
    <div class="ui segment">
      <h2 class="ui header">Score: {{ score }} out of {{ this.words.length }}</h2>

      <form action="#" @submit.prevent="onSubmit" class="ui form">
        <div class="field">
          <div class="ui labeled input fluid">
            <div class="ui label">
              <i class="germany flag"></i> German
            </div>
            <input type="text" readonly :disabled="testOver" :value="currWord.german" />
          </div>
        </div>

        <div class="field">
          <div class="ui labeled input fluid">
            <div class="ui label">
              <i class="uk flag"></i> English
            </div>
            <input 
              type="text" 
              placeholder="Enter English word..." 
              v-model="english" 
              :disabled="testOver" 
              autocomplete="off" 
              ref="answerInput"
            />
          </div>
        </div>

        <button class="ui button positive" :disabled="testOver">Submit</button>
      </form>
    </div>

    <div v-if="testOver" :class="['ui message', resultClass]">
      <div class="header">Test Completed</div>
      <p v-html="result"></p>
      <button class="ui button primary" @click="resetTest">Try Again</button>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  name: 'vocab-test',
  props: {
    words: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      randWords: [],
      incorrectGuesses: [],
      result: '',
      resultClass: '',
      english: '',
      score: 0,
      testOver: false
    };
  },
  computed: {
    currWord: function() {
      return this.randWords.length ? this.randWords[0] : { german: '', english: '' };
    }
  },
  mounted() {
    this.resetTest();
  },
  methods: {
    resetTest() {
      // Sao chép và xáo trộn mảng từ vựng
      this.randWords = [...this.words].sort(() => 0.5 - Math.random());
      this.incorrectGuesses = [];
      this.result = '';
      this.resultClass = '';
      this.english = '';
      this.score = 0;
      this.testOver = false;
    },
    onSubmit: function() {
      // So sánh không phân biệt hoa thường và khoảng trắng thừa
      const input = this.english.trim().toLowerCase();
      const answer = this.currWord.english.trim().toLowerCase();

      if (input === answer) {
        Swal.fire({
          icon: 'success',
          title: 'Correct!',
          text: 'Good job!',
          timer: 1000,
          showConfirmButton: false
        });
        this.score += 1;
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Wrong!',
          text: `Correct answer was: ${this.currWord.english}`,
          timer: 1500,
          showConfirmButton: false
        });
        this.incorrectGuesses.push(this.currWord.german);
      }

      this.english = '';
      this.randWords.shift();

      if (this.randWords.length === 0) {
        this.testOver = true;
        this.displayResults();
      } else {
        // Tự động focus lại vào ô nhập sau khi submit
        this.$nextTick(() => {
          this.$refs.answerInput.focus();
        });
      }
    },
    displayResults: function() {
      if (this.incorrectGuesses.length === 0) {
        this.result = 'You got everything correct. Well done!';
        this.resultClass = 'success';
      } else {
        const incorrect = this.incorrectGuesses.join(', ');
        this.result = `<strong>You got the following words wrong:</strong> ${incorrect}`;
        this.resultClass = 'error';
      }
    }
  }
};
</script>

<style scoped>
.results {
  margin-top: 20px;
}
</style>