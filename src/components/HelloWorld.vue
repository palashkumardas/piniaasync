<script setup>
import { ref, onMounted, computed } from "vue";
import { useUserStore } from '../stores/todo.js'
const store = useUserStore();

const users = computed(() => {
  return store.users;
});

onMounted(() => {
  store.fetchUsers();
});
</script>

<template>
    <div class="text-2xl font-bold text-red-500" v-if="store.loading==true">loading data....</div>
    <h1 class="text-2xl font-bold text-orange-500 bg-gray-200 m-4 py-2">{{ store.title }}</h1>
    <div v-for="user in users" :key="user.id">
      {{ user.id }} {{ user.name }} {{ user.address }}
    </div>

</template>

<style scoped>
</style>
