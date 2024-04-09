import { h, defineComponent } from "vue";
import A from "./A";
import B from "./B";
import C from "./C";

export default defineComponent({
  setup() {
    return () =>
      h("div", [
        h(A, () => h("div", "我是默认插槽")),
        // 注意 `null` 是必需的
        // 以避免 slot 对象被当成 prop 处理
        h(B, null, { foo: () => h("div", "我是具名插槽") }),
        // 注意 `null` 是必需的
        // 以避免 slot 对象被当成 prop 处理
        h(C, null, {
          // 通过解构得到插槽作用域的参数
          footer: ({ msg, list, add }) => [
            h(
              "h2",
              {
                onClick() {
                  add();
                }
              },
              "我是作用域插槽"
            ),
            h("div", `msg: ${msg}`),
            h("div", `list: 接收到了作用域插槽（C组件的List）---> ${list}`)
          ]
        })
      ]);
  }
});
