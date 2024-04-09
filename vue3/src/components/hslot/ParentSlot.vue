<template>
  <A>
    <template #default>
      AAAAAAA
    </template>
  </A>
  <B>
    <template #foo>
      BBB
    </template>
  </B>
  <C>
    <template #footer="data">
      <div @click="data.add"> ok let's go </div>
      {{ data }}
    </template>
  </C>
</template>
<script setup>
import A from "./A";
import B from "./B";
import C from "./C";
</script>
