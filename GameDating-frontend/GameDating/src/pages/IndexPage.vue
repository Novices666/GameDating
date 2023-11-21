<template>
  <user-list-component :user-list="userList" />
</template>

<script setup>
import UserListComponent from "../components/UserListComponent.vue";
import {onMounted, ref} from "vue";
import axiosInstance from "../plugins/axios.js";


let userResultList = ref([]);
const userList = ref([]);
onMounted(async ()=>{
  userResultList = (await axiosInstance.get("/user/recommend", {
    params: {
      pageSize: 10,
      pageNum: 1
    }
  })).data

  console.log(userList);
  if(userResultList){
    userResultList.forEach(user => {
      if(user.tags){
        user.tags = JSON.parse(user.tags);
      }
    })
    userList.value = userResultList;
  }
})
</script>

<style scoped>

</style>