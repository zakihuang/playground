import { reactive } from "vue";

export function hello() {
  const state = reactive({
    loading: true
  });

  loadData = () => {
    setTimeout(() => {
      state.loading = fasle;
    }, 1000);
  };

  loadData();

  return state.loading;
}