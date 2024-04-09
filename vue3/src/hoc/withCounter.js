import { h } from "vue";
// 高阶组件工厂函数
export function withCounter(BaseComponent) {
  return {
    data() {
      return {
        count: 0
      };
    },
    methods: {
      increment() {
        this.count++;
      }
    },
    render() {
      return h(
        BaseComponent,
        { count: this.count, increment: this.increment },
        this.$slots.default({ count: this.count, increment: this.increment })
      );
    }
  };
}
