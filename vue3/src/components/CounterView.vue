<template>
    <div>{{ $data }} {{ x }} {{ $options }}</div>
    <div>hello {{ props }} </div>
    <div @click="increment"> {{ attrs }} {{ $attrs }} 来吧，点击这里 </div>
    <!-- <div> {{ columns.map(({ render }) => render()) }} </div> -->
    <div>==
        {{ name }} = {{ age }}
    </div>
    <my-slot />
</template>
<script setup>
import {
    ref,
    reactive,
    toRefs,
    defineProps,
    useAttrs,
    // defineSlots,
    useSlots,
    h,
    // toRef,
} from 'vue'

const props = defineProps({
    message: String,
    increment: Function,
});

let x = ref(0)

const person = reactive({
    name: 'jone',
    age: 18,
});

const { name, age } = toRefs(person);

setTimeout(() => {
    Object.assign(person, {
        name: 9,
        age: 8
    })
}, 100)

// console.log(toRefs(person));

const attrs = useAttrs();

const slots = useSlots()


const MySlot = h("div", null, slots.title ? slots.title() : slots.default());

// toRef(MySlot)
//  const MyDiv = h('div', null, [
//   h('h1', null, 'aa'),
//   h(DateSelect, null)
// ])
// const columns = ref([
//   {
//     title: "Action",
//     key: "action",
//     render() {
//       return h("div", null, slots.title ? slots.title() : slots.default());
//     },
//   },
// ])

/*
BaseTransition
BaseTransitionPropsValidators
Comment
DeprecationTypes
EffectScope
ErrorCodes
ErrorTypeStrings
Fragment
KeepAlive
ReactiveEffect
Static
Suspense
Teleport
Text
TrackOpTypes
Transition
TransitionGroup
TriggerOpTypes
VueElement
assertNumber
callWithAsyncErrorHandling
callWithErrorHandling
camelize
capitalize
cloneVNode
compatUtils
compileToFunction as compile
computed
createApp
createBlock
createCommentVNode
createElementBlock
createBaseVNode as createElementVNode
createHydrationRenderer
createPropsRestProxy
createRenderer
createSSRApp
createSlots
createStaticVNode
createTextVNode
createVNode
customRef
defineAsyncComponent
defineComponent
defineCustomElement
defineEmits
defineExpose
defineModel
defineOptions
defineProps
defineSSRCustomElement
defineSlots
devtools
effect
effectScope
getCurrentInstance
getCurrentScope
getTransitionRawChildren
guardReactiveProps
h
handleError
hasInjectionContext
hydrate
initCustomFormatter
initDirectivesForSSR
inject
isMemoSame
isProxy
isReactive
isReadonly
isRef
isRuntimeOnly
isShallow
isVNode
markRaw
mergeDefaults
mergeModels
mergeProps
nextTick
normalizeClass
normalizeProps
normalizeStyle
onActivated
onBeforeMount
onBeforeUnmount
onBeforeUpdate
onDeactivated
onErrorCaptured
onMounted
onRenderTracked
onRenderTriggered
onScopeDispose
onServerPrefetch
onUnmounted
onUpdated
openBlock
popScopeId
provide
proxyRefs
pushScopeId
queuePostFlushCb
reactive
readonly
ref
registerRuntimeCompiler
render
renderList
renderSlot
resolveComponent
resolveDirective
resolveDynamicComponent
resolveFilter
resolveTransitionHooks
setBlockTracking
setDevtoolsHook
setTransitionHooks
shallowReactive
shallowReadonly
shallowRef
ssrContextKey
ssrUtils
stop
toDisplayString
toHandlerKey
toHandlers
toRaw
toRef
toRefs
toValue
transformVNodeArgs
triggerRef
unref
useAttrs
useCssModule
useCssVars
useModel
useSSRContext
useSlots
useTransitionState
vModelCheckbox
vModelDynamic
vModelRadio
vModelSelect
vModelText
vShow
version
warn
watch
watchEffect
watchPostEffect
watchSyncEffect
withAsyncContext
withCtx
withDefaults
withDirectives
withKeys
withMemo
withModifiers
withScopeId
*/
</script>
