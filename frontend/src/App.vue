<template>
  <div id="app-layout">
    <div class="ui container content-wrap">
      <nav-bar />
      
      <div class="ui segment main-content">
        <router-view :key="$route.fullPath" />
      </div>
    </div>

    <app-footer />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue'; // 1. Import Footer

export default {
  name: 'App',
  components: {
    NavBar,
    'app-footer': Footer // 2. Khai báo component (đặt tên là app-footer để tránh trùng từ khóa HTML)
  }
};
</script>

<style>
/* Thiết lập Flexbox để Footer luôn nằm dưới cùng */
#app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Chiều cao tối thiểu bằng màn hình */
}

.content-wrap {
  flex: 1; /* Chiếm hết khoảng trống còn lại, đẩy Footer xuống đáy */
  margin-top: 30px;
  max-width: 950px !important;
  width: 100%;
}

.main-content {
  background: white !important;
  min-height: 500px;
}
</style>