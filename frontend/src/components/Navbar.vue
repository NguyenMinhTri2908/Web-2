<template>
  <v-app-bar color="primary" density="compact" elevation="2">
    <v-app-bar-title class="font-weight-bold">
      <v-icon icon="mdi-school" class="mr-2"></v-icon>
      Vocab Builder
    </v-app-bar-title>

    <template v-slot:append>
      <v-btn to="/words" variant="text" prepend-icon="mdi-home">Home</v-btn>
      <v-btn to="/words/new" variant="text" prepend-icon="mdi-plus">Add</v-btn>
      <v-btn to="/test" variant="text" prepend-icon="mdi-check-circle">Test</v-btn>
      <v-btn to="/about" variant="text" prepend-icon="mdi-information">About</v-btn>

      <div class="d-flex align-center ml-4" style="width: 250px">
        <v-text-field
          v-model="keyword"
          density="compact"
          variant="solo-filled"
          label="Search vocabulary..."
          append-inner-icon="mdi-magnify"
          single-line
          hide-details
          @click:append-inner="onSearch"
          @keyup.enter="onSearch"
          class="shrink"
        ></v-text-field>
      </div>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      keyword: ''
    };
  },
  methods: {
    onSearch() {
      this.$router.push({ name: 'words', query: { q: this.keyword } });
    }
  }
};
</script>