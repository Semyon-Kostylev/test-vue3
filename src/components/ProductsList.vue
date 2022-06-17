<template>
  <ul class="list">
    <ProductsItem
      v-for="product in products"
      :key="product.id"
      :product="product"
      class="list__item"
      :class="`list__item--${product.id}`"
    />
  </ul>
</template>

<script>
import { ref } from "vue";
import ProductsItem from "@/components/ProductsItem.vue";
import ProductsData from "@/data/productsData";

export default {
  name: "ProductsList",
  components: {
    ProductsItem,
  },
  setup() {
    const products = ref([]);
    products.value = ProductsData;

    return {
      products,
    };
  },
};
</script>

<style lang="scss" scoped>
.list {
  display: grid;
  grid-template-columns: repeat(3, 320px);
  gap: 20px;
  justify-content: space-between;
  @media screen and (max-width: 1180px) {
    grid-template-columns: repeat(2, 320px);
    justify-content: center;
    gap: 50px;
  }
  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  &__item {
    width: 320px;
    @media screen and (max-width: 760px) {
      justify-self: center;
    }
    @media screen and (max-width: 480px) {
      width: 100%;
      max-width: 320px;
    }
    &--1 {
      @media screen and (max-width: 1180px) {
        grid-column: 1 / 3;
        justify-self: center;
        @media screen and (max-width: 760px) {
          grid-column: auto;
        }
      }
    }
  }
}
</style>
