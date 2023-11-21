<template>
  <user-list-component  :user-list="userList"/>
</template>

<script setup>
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import axiosInstance from "../plugins/axios.js";
import qs from "qs";
import UserListComponent from "../components/UserListComponent.vue";

const route = useRoute();
  const paramLists = route.query.tags;
  console.log(qs.stringify({tagList:paramLists},{'arrayFormat':'repeat'}));
  const userList = ref([])  ;

 let tagList = paramLists;

  onMounted(async () => {
    const userResultList = await axiosInstance.get('/user/search/tags',{
      params: {
        tagList:tagList,
        pageSize:10,
        pageNum:1
      },
      paramsSerializer:params => {
        return qs.stringify(params,{indices :false})
      }
    }).then(function (response) {
      return response.data
    }).catch(function (error) {
      console.log(error)
    });

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