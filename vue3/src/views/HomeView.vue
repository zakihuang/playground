<template>
    <Suspense>
        <template #default>
            <HelloWorld msg="Welcome to Your Vue.js App" />
        </template>
        <template #fallback>
            <view>Loading...</view>
        </template>
    </Suspense>

    <HocComponent>
        <template #default="{ count, increment }">
            count === {{ count }}
            <p @click="increment">This is the content passed from the parent component</p>
        </template>
    </HocComponent>

    <HocComponentState>
        <template #default="data">
            <p @click="() => data.increment()">你好哈，这样使用不行吗 == {{ data }} </p>
        </template>
    </HocComponentState>

    <Aslot />

    <ParentSlot />
</template>
<script setup>
import HelloWorld from '../components/HelloWorld.vue';
import CounterView from '../components/CounterView.vue';
import { withCounter } from '../hoc/withCounter'
import HocComponentState from '../hoc/withState'
import Aslot from '../components/hslot/Parent'
import ParentSlot from '../components/hslot/ParentSlot'
// import '../rxjs/demo'
const HocComponent = withCounter(CounterView);
</script>