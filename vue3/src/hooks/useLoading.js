import { reactive } from "vue";

export function useLoading() {
  const state = reactive({
    loading: true
  });

  const loadData = async () => {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(false);
      }, 1000);
    });
  };

  loadData().then((r) => {
    state.loading = r;
  });

  return reactive(state); // 恢复响应性
}
