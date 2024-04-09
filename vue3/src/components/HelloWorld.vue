<template>
  <h1>{{ title }} {{ xx }} = {{ yy }} = {{ formatted }} </h1>

  <button type="button" ref="button">
    Choose file {{ props.msg }}
  </button>
  
  <UseDraggable class="fixed" v-slot="{ x, y }" :initial-value="{ x: 10, y: 10 }">
    Drag me! I am at {{ x }}, {{ y }}
  </UseDraggable>

  <button @click="toggleDark()">
    <i inline-block align-middle i="dark:carbon-moon carbon-sun" />
    <span class="ml-2">{{ isDark ? 'Dark' : 'Light' }}</span>
  </button>

</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  msg: String
});

import { useMouse, useDateFormat, useNow } from '@vueuse/core'
import { UseDraggable } from '@vueuse/components'

const { x: xx, y: yy } = useMouse()

const getTodoInfo = async () => {
  return await new Promise((resolve) => {
    setTimeout(resolve, 1000, 'hello suspense !')
  })
}

const formatted = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss')
var title = await getTodoInfo()


import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

</script>

<style scoped>
.fixed {
  position: fixed;
}
</style>
