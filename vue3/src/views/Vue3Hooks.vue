<template>
    <div>
        {{ x }} - {{ y }}
    </div>
    <div>
        {{ loading }}
    </div>
    <div>
        {{ data }}
        {{ error }}
    </div>
</template>
<script setup>
// 副作用
import { useMouse } from '../hooks/useMouse'
const { x, y } = new useMouse();

// 轻量化
import { useLoading } from '../hooks/useLoading'
const loading = useLoading();

// 自动化
import { useFetch } from '../hooks/useFetch'
import { ref } from "vue";
const id = ref('url/0');

// const { data, error } = useFetch(id)
const { data, error } = useFetch(() => `/posts/${id.value}`);
setTimeout(() => id.value = 'url/1', 1000)

</script>