<template>
  <v-app>
    <NavBar />

    <v-main class="bg-grey-lighten-4">
      <v-container>
        <router-view :key="$route.fullPath" />
      </v-container>
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script>
import NavBar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    'AppFooter': Footer
  }
};
</script>

