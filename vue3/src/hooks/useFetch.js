import { ref, toValue, watchEffect } from "vue";

export function useFetch(urlStr) {
  const data = ref(null);
  const error = ref(null);
  const loading = ref(true);

  async function fetchData() {
    try {
      const url = typeof urlStr === "function" ? urlStr() : toValue(urlStr);

      const response = await Promise.resolve({ url, data: Date.now() });
      // if (!response.ok) {
      //   throw new Error("Network response was not ok");
      // }
      data.value = await response;
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  }

  watchEffect(() => {
    console.log("多么美妙的变化!!！", toValue(urlStr));
    fetchData();
  });

  return { data, error, loading };
}
