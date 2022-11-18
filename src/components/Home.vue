<template>
 <div class="" v-if="authStore.user">
    <h1>{{authStore.user?.name}}</h1>
    <p>{{authStore.user?.email}}</p>
 </div>
 <div class="" v-else>
  <h1>Go and Login</h1>
 </div>
</template>

<script setup>
import {  onMounted } from 'vue';
import { useAuthStore } from '../stores/auth';
import { ref } from 'vue';

const authStore = useAuthStore();


const user =ref();
onMounted(async ()=>{
  await authStore.getUser();
});
</script>
<style>

</style>