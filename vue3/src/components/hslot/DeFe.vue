<template>
  <div>
    <slot :msg="msg" :list="list" :add="add" />
  </div>
</template>
<script setup>
import { ref } from "vue";
const msg = ref("这是一条来自作用域插槽（C组件）传递的数据");
const add = () => {
  console.log(msg.value);
  msg.value += "999";
};

const list = ["a", "b", "c", "d"];
</script>
