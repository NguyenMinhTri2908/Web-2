<template>
    <div>
      <h1>About Us</h1>
      
      <div class="ui segment raised">
        <h2 class="ui header text-center">
          <i class="book icon blue"></i>
          <div class="content">
            Vocab Builder
            <div class="sub header">Ứng dụng học từ vựng hiệu quả</div>
          </div>
        </h2>
  
        <div class="ui divider"></div>
  
        <p>
          Chào mừng bạn đến với <strong>Vocab Builder</strong> - công cụ hỗ trợ học tập giúp bạn xây dựng kho từ vựng cá nhân một cách dễ dàng.
        </p>
  
        <h3 class="ui header">Tính năng chính:</h3>
        <div class="ui relaxed list">
          <div class="item">
            <i class="check circle icon green"></i>
            <div class="content">
              Quản lý từ vựng đa ngôn ngữ: <strong>Anh - Đức - Việt</strong>.
            </div>
          </div>
          <div class="item">
            <i class="check circle icon green"></i>
            <div class="content">
              Tìm kiếm từ vựng nhanh chóng.
            </div>
          </div>
          <div class="item">
            <i class="check circle icon green"></i>
            <div class="content">
              Chế độ <strong>Test</strong> để tự kiểm tra kiến thức.
            </div>
          </div>
        </div>
  
        <div class="ui message info">
          <div class="header">Thông tin dự án</div>
          <ul class="list">
            <li><strong>Môn học:</strong> Web Programming</li>
            <li><strong>Công nghệ:</strong> Vue.js, Node.js, MongoDB</li>
            <li><strong>Phiên bản:</strong> 1.0.0</li>
          </ul>
        </div>
  
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'About'
  };
  </script>
  
  <style scoped>
  /* Căn giữa tiêu đề nội dung */
  .text-center {
    text-align: center;
    margin-top: 10px;
  }
  
  /* Tăng kích thước chữ cho dễ đọc */
  p {
    font-size: 1.1em;
    line-height: 1.6;
  }
  </style>