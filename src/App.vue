<template>
  <section class="products">
    <div class="products__container container">
      <h1 class="products__title">Ты сегодня покормил кота?</h1>
      <ProductsList class="products__list" />
    </div>
  </section>
</template>

<script>
import ProductsList from "@/components/ProductsList.vue";
export default {
  name: "App",
  components: { ProductsList },
};
</script>

<style lang="scss" scoped>
.products {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: url("@/assets/images/bg-image.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  &__title {
    margin-bottom: 24px;
    font-family: "Exo2";
    font-weight: 100;
    font-size: 36px;
    line-height: 44px;
    text-align: center;
    color: $white-color;
    text-shadow: 0px 1px 1px #000000;
  }
}
</style>
