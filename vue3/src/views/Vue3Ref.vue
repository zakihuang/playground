<template>
    <div>
        <h2>
            @1_ref 演示
        </h2>
        <button @click="count++">
            自动解包 count++ {{ count }}
        </button>
        <button @click="increment">
            手动解包 increment {{ count }}
        </button>
        <button @click="addObj">{{ obj }}</button>
    </div>
    <div>
        <h2>
            @2_reactive 演示
        </h2>
        <button @click="state.count++">
            {{ state.count }}
        </button>
    </div>
</template>
<script setup>
// @1_ref 原始值 String, Number, Boolean
import { ref } from 'vue';
const count = ref(0);
const increment = () => count.value++;

// ref 自动转换 { }, [ ]
const obj = ref({
    nested: { count: 0 },
    arr: ['foo', 'bar']
})
const addObj = () => {
    obj.value.nested.count++
    obj.value.arr.push('test')
}

// @2_reactive 复杂数据类型 { }, [ ]
import { reactive } from 'vue';
// 1 不能用于原始类型 reactive(string、number 或 boolean)

// 2 不能替换整个对象
let state = reactive({ count: 0 })
// 上面的 ({ count: 0 }) 引用将不再被追踪
// (响应性连接已丢失！)
state = reactive({ count: 1 })

// 3 对解构操作不友好
// 当解构时，count 已经与 state.count 断开连接
let { count: countA } = state
// 以下操作不会影响原始的 state
countA++
console.log(`countA=> ${countA}`)
    // 该函数接收到的是一个普通的数字
    // 并且无法追踪 state.count 的变化
    // 我们必须传入整个对象以保持响应性

    ; (function (param) {
        console.log(`param=>${param}`)
    })(state.count);

state.count = 999

// >> 由于这些限制，建议使用 ref() 作为声明响应式状态的主要 API


// 额外的 ref 解包细节
// 作为 reactive 对象的属性
// 一个 ref 会在作为响应式对象的属性被访问或修改时自动解包。换句话说，它的行为就像一个普通的属性：
// 自动关联
const countB = ref(0)
const stateB = reactive({ countB })
console.log(stateB.countB) // 0
stateB.countB = 1;
countB.value++;
console.log('countB.value, stateB.countB', countB.value, stateB.countB) // 1 1

// 如果将一个新的 ref 赋值给一个关联了已有 ref 的属性，那么它会替换掉旧的 ref：
const otherCount = ref(2)
stateB.countB = otherCount
console.log(stateB.countB) // 2
// 原始 ref 现在已经和 state.count 失去联系
console.log(countB.value) // 1

// 数组和集合的注意事项
// 与 reactive 对象不同的是，当 ref 作为响应式数组或原生集合类型 (如 Map) 中的元素被访问时，它不会被解包：
const books = reactive([ref('Vue 3 Guide')])
console.log(books[0].value) // 这里需要 .value

const map = reactive(new Map([['count', ref(110)]]))
console.log(map.get('count').value) // 这里需要 .value
</script>