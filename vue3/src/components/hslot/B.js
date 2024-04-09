import { h, defineComponent } from 'vue'
export default defineComponent({
    setup(_, { slots }) {
        return () => h('span', null, slots.foo?.())
    }
})
