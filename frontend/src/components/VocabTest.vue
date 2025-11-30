<template>
  <div>
    <v-card class="mx-auto" max-width="600" elevation="4">
      <v-card-item class="bg-primary text-white">
        <div class="d-flex justify-space-between align-center">
          <v-card-title class="text-h5 font-weight-bold">
            Vocabulary Quiz
          </v-card-title>
          <v-chip color="white" variant="outlined" class="font-weight-bold">
            Score: {{ score }} / {{ this.words.length }}
          </v-chip>
        </div>
      </v-card-item>

      <v-card-text class="pt-6">
        <v-form @submit.prevent="onSubmit">
          <v-text-field
            label="German Word"
            :model-value="currWord.german"
            readonly
            variant="outlined"
            prepend-inner-icon="mdi-flag"
            bg-color="grey-lighten-4"
            class="mb-2"
          ></v-text-field>

          <v-text-field
            label="Enter English Translation"
            v-model="english"
            :disabled="testOver"
            autocomplete="off"
            ref="answerInput"
            variant="outlined"
            prepend-inner-icon="mdi-keyboard"
            placeholder="Type here..."
            :autofocus="!testOver"
          ></v-text-field>

          <v-btn
            type="submit"
            color="success"
            block
            size="large"
            :disabled="testOver"
            class="mt-2 font-weight-bold"
            prepend-icon="mdi-check"
          >
            Submit Answer
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>

    <v-dialog v-model="testOver" persistent max-width="500">
      <v-card>
        <v-card-title class="text-h5 bg-success text-white">
          <v-icon icon="mdi-trophy" class="mr-2"></v-icon>
          Test Completed!
        </v-card-title>
        
        <v-card-text class="pa-4">
          <div v-if="incorrectGuesses.length === 0" class="text-center">
            <v-icon icon="mdi-emoticon-cool" color="success" size="64" class="mb-2"></v-icon>
            <h3 class="text-h6 text-success">Perfect Score!</h3>
            <p>You got everything correct. Well done!</p>
          </div>

          <div v-else>
            <v-alert
              type="error"
              variant="tonal"
              title="Words to review:"
              class="mb-2"
            >
              <ul class="ml-4 mt-2">
                <li v-for="(word, index) in incorrectGuesses" :key="index">
                  {{ word }}
                </li>
              </ul>
            </v-alert>
          </div>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            variant="elevated"
            @click="resetTest"
            prepend-icon="mdi-refresh"
          >
            Try Again
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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