<template>
  <!-- <my-comp /> -->
  <slot :count="count" :increment="increment"></slot>
</template>
<script setup>
import { ref } from "vue";

const count = ref(9);

const increment = () => {
  console.log(count.value)
  count.value++;
}

// const slots = useSlots()

// const myComp = h('div', slots.default({ increment, count: count.value }));

// slots.default({ count, increment, fuck: 'fuck' })

// const myComp = h('div', null, renderSlot(slots, 'default', { increment, count: count.value }));
</script>