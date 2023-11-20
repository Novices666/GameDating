<template>
  <template v-if="user">
      <div style="padding:20px;">
        <van-image
          round
          cover
          width="5rem"
          height="5rem"
          :src="user.avatarUrl"
        />
        <van-tag  size="large" >
          {{ user.userAccount }}
        </van-tag>
        <van-tag type="primary" size="large" v-if="user.userType = 1">
          {{ "管理员" }}
        </van-tag>
      </div>

    <van-cell title="昵称"  :value="user.username"/>
    <van-cell title="性别"  :value="user.gender"/>
    <van-cell title="手机号" :value="user.phone" />
    <van-cell title="邮箱"  :value="user.email"/>
    <van-cell title="注册时间"  :value="user.createTime"/>

    <van-floating-bubble
        axis="xy"
        icon="edit"
        magnetic="x"
        v-model:offset="offset"
        @click = "toEdit"
    />

  </template>

</template>

<script setup lang="ts">

import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import {getCurrentUser} from "../services/user.js"
import {showToast} from "vant";

/**
 *
 * @type {UserType}
 */
let user = ref();

onMounted(async ()=>{
  user.value = await getCurrentUser();
  console.log(user)
});

const router = useRouter();

const offset = ref({y:500})

const toEdit = () =>{
  router.push({
    path:'/user/edit'
  })
}






</script>

<style scoped>

</style>