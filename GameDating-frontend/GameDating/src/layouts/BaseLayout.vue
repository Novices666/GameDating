<template>

  <van-nav-bar title="标题" left-arrow
               @click-left="onClickLeft"
               @click-right="onClickRight"
  >
    <template #right>
      <van-icon name="search" size="18" />
    </template>
  </van-nav-bar>
  <div>

  </div>

  <router-view />

  <van-tabbar route @change="onChange" v-model="active">
    <van-tabbar-item icon="home-o" to="/">主页</van-tabbar-item>
    <van-tabbar-item icon="search" to="/team">组队</van-tabbar-item>
    <van-tabbar-item icon="friends-o" to="/user">个人</van-tabbar-item>

  </van-tabbar>



</template>

<script setup>
import {ref} from 'vue';
import {showToast} from 'vant';
import {useRouter} from "vue-router";

const active = ref('index');
const onChange = (index) => showToast(`标签 ${index}`);
const router = useRouter();

const onClickLeft = () =>{
  router.back();

};
const onClickRight = () =>{
  router.push('/search');
};

</script>

<style scoped>

</style>