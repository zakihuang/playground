<template>
  <h1>{{ title }} {{ x }} = {{ y }} = {{ formatted }} </h1>

  <button type="button" ref="button">
    Choose file {{ props.msg }}
  </button>

</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  msg: String
});

import { useMouse, useDateFormat, useNow } from '@vueuse/core'
const { x, y } = useMouse()

const getTodoInfo = async () => {
  return await new Promise((resolve) => {
    setTimeout(resolve, 1000, 'hello suspense !')
  })
}

const formatted = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss')
var title = await getTodoInfo()
</script>