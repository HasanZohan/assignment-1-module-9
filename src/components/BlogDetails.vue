<template>
  <main class="main-content container">
    <div class="full-screen-container row">
      <div class="blog-post col-lg-12">
        <img :src="blogData.img" alt="Banner Image" class="banner-image">
        <h1 class="title">{{ blogData.title }}</h1>
        <div class="blog-details">
          <p>{{ blogData.content }}</p>
        </div>
      </div>
    </div>
  </main>
</template>
  
  <script setup>
  import axios from 'axios';
  import { ref } from 'vue';
  
  const blogData = ref({});
  
  blog_Details();
  
  async function blog_Details() {
    try {
      const url = "https://basic-blog.teamrabbil.com/api/post-details/53";
      const res = await axios.get(url);
      const data = res.data['postDetails'];
  
      blogData.value = data;
  
    } catch (error) {
      console.error('Error fetching blog data:', error);
    }
  }
  </script>
  
  <style scoped>
.main-content {
width: max-content;
  margin-top: 80px; /* Increase this value to give more space for the navbar */
}

.banner-image {
    width: 100%;
    border-radius: 15px;
    height: 600px;
    object-fit: cover;
}

.title {
  font-size: 24px;
  margin: 20px 0;
}

.blog-details {
  font-size: 16px;
}


</style>
  