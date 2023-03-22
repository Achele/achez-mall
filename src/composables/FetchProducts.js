import { ref } from "vue";

const FetchProducts = () => {
  const products = ref([]);
  const error = ref(null);
  const loading = ref(false);

  const load = async () => {
    try {
      loading.value = true;
      const res = await fetch("https://dummyjson.com/products");
      if (!res.ok) {
        throw Error("no data available");
      }
      const data = await res.json();
      products.value = data.products;
      loading.value = false;
      console.log(data);
    } catch (err) {
      error.value = err.message;
      loading.value = false;
      console.log(error.value);
    }
  };
  return { products, error, loading, load };
};
export default FetchProducts;
