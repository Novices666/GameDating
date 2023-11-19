<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="userAccount"
          name="账号"
          label="账号"
          placeholder="账号"
          :rules="[{ required: true, message: '请填写账号' }]"
      />
      <van-field
          v-model="userPassword"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>

</template>

<script setup>
import {ref} from "vue";
import axiosInstance from "../plugins/axios.js";
import {showFailToast, showSuccessToast} from "vant";
import {useRouter} from "vue-router";

const router = useRouter();

const userAccount = ref('');
const userPassword = ref('');
const onSubmit = async () => {
  const response = await axiosInstance.post("/user/login",{
    userAccount:userAccount.value,
    userPassword:userPassword.value,
  });
  if(response.code === 20000){
    showSuccessToast("登录成功");
    await router.replace("/");
  }else {
    showFailToast("登录失败");
  }
}
</script>

<style scoped>

</style>