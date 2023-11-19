<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field name="avatarUrl" label="头像">
        <template #input>
          <van-uploader v-model="editUser.avatarUrl" />
        </template>
      </van-field>
      <van-field
          v-model="editUser.username"
          name="username"
          label="昵称"
          placeholder="昵称"
          :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
          v-model="editUser.gender"
          is-link
          readonly
          name="gender"
          label="性别"
          placeholder="点击选择性别"
          @click="showPicker = true"
      />
      <van-popup v-model:show="showPicker" position="bottom">
        <van-picker
            :columns="columns"
            @confirm="onConfirm"
            @cancel="showPicker = false"
        />
      </van-popup>


      <van-field
          v-model="editUser.phone"
          name="phone"
          label="手机号"
          placeholder="手机号"
          :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
          v-model="editUser.email"
          name="email"
          label="邮箱"
          placeholder="邮箱"
          :rules="[{ required: true, message: '请填写邮箱' }]"
      />

    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        修改
      </van-button>
    </div>
  </van-form>


</template>

<script setup>
import {useRoute} from "vue-router";
import {ref} from "vue";
const route = useRoute();
let editUser = ref();

const onSubmit = (values)=>{

}
onSubmit(()=>{
  editUser = route.query.userEdit
})


//性别选择相关
const result = ref('');
const showPicker = ref(false);
const columns = [
  { text: '男', value: 0},
  { text: '女', value: 1},
];
const onConfirm = ({ selectedOptions }) => {
  editUser.gender = selectedOptions[0]?.value;
  showPicker.value = false;
};

</script>

<style scoped>

</style>