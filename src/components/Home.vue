<template>
  <h1>{{ user?.name}}</h1>
  <p>{{user?.email}}</p>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const user =ref();
onMounted(async ()=>{
  const data = await axios.get('/api/user');
  user.value = data.data
});
</script>
<style>

</style>