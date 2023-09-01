<template>
   <div class="container">
     <div class="row">
       <div class="col-lg-12">
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" style="width: 100%;">
            <a class="navbar-brand" href="#">Blog</a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item" v-for="item in navbarData" :key="item.id">
                  <a class="nav-link" href="#">{{ item['name'] }}</a>
                </li>
              </ul>
            </div>
          </nav>
       </div>
     </div>
   </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted, computed } from 'vue'

const navbarData = ref([])

onMounted(() => {
    categories();
});

async function categories(){
let url = "https://basic-blog.teamrabbil.com/api/post-categories"
let res = await axios.get(url)
let data = res.data

navbarData.value = data
}
</script>

<style scoped>
.navbar {
    width: 100%;
    padding-left: 50px; /* Add padding to the left side */
    padding-right: 50px; /* Add padding to the right side */
}
.navbar-nav {
    margin-left: auto;
}
</style>
  