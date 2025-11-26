<template>
    <div>
      <h1>Show Word</h1>
      
      <div class="ui card centered">
        <div class="content">
          <div class="header">{{ word.english }}</div>
        </div>
        <div class="content">
          <div class="ui sub header">German Translation</div>
          <div class="description">
            {{ word.german }}
          </div>
        </div>
        <div class="extra content">
          <router-link :to="{ name: 'edit', params: { id: word._id }}" class="ui button primary">
            <i class="edit icon"></i> Edit
          </router-link>
          <router-link to="/words" class="ui button">
            <i class="arrow left icon"></i> Back
          </router-link>
        </div>
      </div>
  
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'Show',
    data() {
      return {
        word: {}
      };
    },
    async mounted() {
      try {
        const res = await axios.get(`http://localhost:3000/words/${this.$route.params.id}`);
        this.word = res.data;
      } catch (error) {
        console.error(error);
      }
    }
  };
  </script>