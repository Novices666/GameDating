<template>
  <van-search
      v-model="searchText"
      show-action
      placeholder="请输入搜索标签"
      @clear="onClear"
      @cancel="onClear"
      @update:model-value="searchTextChaged"
  >
    <template #action>
      <div @click="onSearch">搜索</div>
    </template>
  </van-search>

  <van-divider
      :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
  >
    已选标签
  </van-divider>
  <div v-if="activeIds.length === 0">暂无，请选择标签</div>

  <van-space wrap>
    <van-tag closeable size="medium" type="primary" @close="doClose(tag)" v-for="tag in activeIds">
      {{ tag }}
    </van-tag>
  </van-space>



  <van-divider
      :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
  >
    全部标签
  </van-divider>


  <van-tree-select
      v-model:active-id="activeIds"
      v-model:main-active-index="activeIndex"
      :items="tagList"
  />


</template>

<script setup>
import {ref} from 'vue';
import {useRouter} from "vue-router";

const router = useRouter();

const activeIds = ref([]);
const activeIndex = ref(0);
const originalList = [
  {
    text: '性别',
    children: [
      {text: '男', id: '男'},
      {text: '女', id: '女'},
    ],
  },
  {
    text: '方向',
    children: [
      {text: 'java', id: 'java'},
      {text: 'python', id: 'python'},
      {text: 'C++', id: 'C++'},
    ],
  },
];

let tagList = ref(originalList);
const doClose = (tag) => {
  activeIds.value = activeIds.value.filter(id =>{
    return id !== tag;
  })
};

const searchText = ref('');

const onClear = () =>{
  searchText.value = '';
  tagList.value = originalList;
}

const searchTextChaged = ()=>{
  if(searchText.value === '')onClear();
  tagList.value  = originalList.map(parentTag =>{
    const tempChildren = [...parentTag.children];
    const tempParentTag = {...parentTag};
    tempParentTag.children = tempChildren.filter(item => item.text.includes(searchText.value));
    return tempParentTag;
  });
}

const onSearch = () =>{
  router.push({
    path: "/searchResult",
    query: {
      tags: activeIds.value,
    }
  })
}

</script>

<style scoped>

</style>