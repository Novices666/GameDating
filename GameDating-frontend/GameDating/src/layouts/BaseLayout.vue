<template>

  <van-nav-bar title="标题" left-arrow>
    <template #right>
      <van-icon name="search" size="18" />
    </template>
  </van-nav-bar>
  <div>

  </div>

  <van-tabbar @change="onChange">
    <van-tabbar-item icon="home-o">标签 1</van-tabbar-item>
    <van-tabbar-item icon="search">标签 2</van-tabbar-item>
    <van-tabbar-item icon="friends-o">标签 3</van-tabbar-item>
    <van-tabbar-item icon="setting-o">标签 4</van-tabbar-item>
  </van-tabbar>



</template>

<script>
import {ref} from 'vue';
import {showToast} from 'vant';

export default {
  name: "BaseLayout",
  setup() {
    const active = ref(0);
    const onChange = (index) => showToast(`标签 ${index}`);
    return {
      onChange,
    };
  },
}


</script>

<style scoped>

</style>