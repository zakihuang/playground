import { h, ref, defineComponent } from "vue";
export default defineComponent({
  setup(_, { slots }) {
    const msg = ref("这是一条来自作用域插槽（C组件）传递的数据");
    const add = () => {
      console.log(msg.value);
      msg.value += "999";
    };
    return () =>
      h(
        "span",
        slots.footer?.({
          msg: msg.value,
          list: ["a", "b", "c", "d"],
          add
        })
      );
  }
});

// import { h, ref, defineComponent, renderSlot } from "vue";
// export default defineComponent({
//   setup(_, { slots }) {
//     const msg = ref("这是一条来自作用域插槽（C组件）传递的数据");
//     const add = () => {
//       console.log(msg.value);
//       msg.value += "999";
//     };
//     return () =>
//       h(
//         "span",
//         renderSlot(slots, "footer", {
//           msg: msg.value,
//           list: ["a", "b", "c", "d"],
//           add
//         })
//       );
//   }
// });
