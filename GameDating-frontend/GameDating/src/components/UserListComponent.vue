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

<script setup lang="ts">
  import {UserType} from "../models/user.js";

  interface UserCardListProps{
    userList: UserType[];
  }

  const props= withDefaults(defineProps<UserCardListProps>(),{
    //@ts-ignore
    userList: [] as UserType[]
  });
</script>

<style scoped>

</style>