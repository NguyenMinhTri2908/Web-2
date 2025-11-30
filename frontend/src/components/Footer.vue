<template>
  <v-footer color="primary" class="d-flex flex-column mt-10">
    <div class="bg-primary d-flex w-100 align-center px-4">
      <strong>Vocab Builder - Học từ vựng mỗi ngày!</strong>
      <v-spacer></v-spacer>
      <v-btn icon="mdi-facebook" variant="plain" size="small"></v-btn>
      <v-btn icon="mdi-twitter" variant="plain" size="small"></v-btn>
      <v-btn icon="mdi-linkedin" variant="plain" size="small"></v-btn>
    </div>

    <div class="px-4 py-2 bg-black text-center w-100">
      {{ new Date().getFullYear() }} — <strong>University of Greenwich</strong>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer'
};
</script>