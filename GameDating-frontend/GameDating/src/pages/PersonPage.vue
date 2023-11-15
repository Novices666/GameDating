<template>
  <van-cell title="账号" is-link :value="user.userAccount" @click="toEdit('userAccount','账号',user.userAccount)"/>
  <van-cell title="昵称" is-link :value="user.username" @click="toEdit('username','昵称',user.username)"/>
  <van-cell title="用户组" is-link :value="user.userType" @click="toEdit('userType','用户组',user.userType)"/>
  <van-cell title="头像" is-link :value="user.avatarUrl" @click="toEdit('avatarUrl','头像',user.avatarUrl)">
    <img :src="user.avatarUrl" style="width: 25px;height: 25px" alt="">
  </van-cell>
  <van-cell title="性别" is-link :value="user.gender" @click="toEdit('gender','性别',user.gender)"/>
  <van-cell title="手机号" is-link :value="user.phone" @click="toEdit('phone','手机号',user.phone)"/>
  <van-cell title="邮箱" is-link :value="user.email" @click="toEdit('email','邮箱',user.email)"/>
  <van-cell title="注册时间" is-link :value="user.createTime.toISOString()"/>
  
</template>

<script setup lang="ts">

import {useRouter} from "vue-router";

const user = {
    userAccount: 'novices',
    userType: '普通用户',
    username: '菜鸟',
    avatarUrl: 'https://www.novices.cc/favicon.ico',
    gender: '男',
    phone: '1234568888',
    email: '123123@qq.com',
    userStatus: 1,
    createTime: new Date(),

}

const router = useRouter();

const toEdit = (editKey:string,editName:string,currentValue:string) =>{
  router.push({
    path:'/user/edit',
    query:{
      editKey,
      editName,
      currentValue
    }
  })
}

</script>

<style scoped>

</style>