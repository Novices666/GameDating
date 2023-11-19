<template>
  <!-- 不指定单位，默认为 px -->
  <van-empty image-size="100%" v-if="userList.length<1" image="search" description="暂无结果"/>


  <van-card
      v-for="temopUser in userList"
      :desc="temopUser.gender"
      :title="`${temopUser.username}(${temopUser.userAccount})`"
      :thumb="temopUser.avatarUrl"

  >
    <template #tags>
      <van-space>
        <van-tag plain type="primary" v-for="tag in temopUser.tags">{{ tag }}</van-tag>
      </van-space>
    </template>
    <template #footer>
      <van-button size="mini">联系我</van-button>
    </template>
  </van-card>

</template>

<script setup>
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import axiosInstance from "../plugins/axios.js";
import qs from "qs";

const route = useRoute();
  const paramLists = route.query.tags;
  console.log(qs.stringify({tagList:paramLists},{'arrayFormat':'repeat'}));
  const userList = ref([])  ;

 let tagList = paramLists;

  onMounted(async () => {
    const userResultList = await axiosInstance.get('/user/search/tags',{
      params: {
        tagList:tagList,
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