<template>
  <div class="ui container">
    <div class="ui secondary pointing menu">
      <router-link to="/words" class="item" active-class="active">
        <i class="home icon"></i> Home
      </router-link>
      <router-link to="/words/new" class="item" active-class="active">
        <i class="plus icon"></i> Add Word
      </router-link>
      <router-link to="/test" class="item" active-class="active">
        <i class="check icon"></i> Test Page
      </router-link>
      
      <div class="right menu">
        <div class="item">
          <div class="ui icon input">
            <input type="text" placeholder="Search...">
            <i class="search link icon"></i>
          </div>
        </div>
      </div>
    </div>

    <div class="ui segment">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
/* Thêm khoảng cách phía trên cho đẹp */
.ui.container {
  margin-top: 20px;
}
</style>