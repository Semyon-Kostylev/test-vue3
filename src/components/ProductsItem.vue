<template>
  <li class="product">
    <div
      class="product__card"
      :class="[{ 'product__card--none': !product.inStock }]"
      ref="card"
      @click.prevent="toggleProduct"
      @mouseenter.prevent="addHover()"
      @mouseleave.prevent="deleteHover()"
    >
      <article class="product__card-front">
        <h3 v-if="!subtitleMessage" class="product__subtitle">
          Сказочное заморское яство
        </h3>
        <h3 v-else class="product__subtitle product__subtitle--message">
          Котэ не одобряет?
        </h3>
        <h2 class="product__title">
          <span class="product__name">Нямушка</span>
          <span class="product__with">{{ product.title }}</span>
        </h2>
        <ul class="product__list">
          <li
            v-for="(sign, index) in product.signs"
            :key="index"
            class="product__item"
          >
            <span v-if="sign.count">{{ sign.count }}</span>
            {{ sign.description }}
          </li>
        </ul>
      </article>
      <div
        class="product__weight weight"
        ref="weight"
        :class="{ selected: selected }"
      >
        <span class="weight__number">{{ product.weight }}</span>
        <span class="weight__type">кг</span>
      </div>
    </div>
    <p v-if="!selected && product.inStock" class="product__description">
      Чего сидишь? Порадуй котэ,
      <span
        ><button @click.prevent="toggleProduct" type="button">купи</button
        >.</span
      >
    </p>
    <p v-if="selected && product.inStock" class="product__description">
      {{ product.description }}
    </p>
    <p
      v-if="!product.inStock"
      class="product__description product__description--none"
    >
      Печалька, {{ product.title }} закончился.
    </p>
  </li>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    product: Object,
  },
  setup() {
    const selected = ref(false);
    const subtitleMessage = ref(false);

    const card = ref(null);
    const weight = ref(null);

    const toggleProduct = () => {
      selected.value = !selected.value;
      subtitleMessage.value = false;
      deleteHover();
    };

    const addHover = () => {
      if (!selected.value) {
        card.value.style.backgroundColor = "#1698D9";
        weight.value.style.backgroundColor = "#2EA8E6";
      } else {
        card.value.style.backgroundColor = "#E52E7A";
        weight.value.style.backgroundColor = "#E52E7A";
        subtitleMessage.value = true;
      }
    };

    const deleteHover = () => {
      if (!selected.value) {
        card.value.style.backgroundColor = "#1698D9";
        weight.value.style.backgroundColor = "#1698D9";
      } else {
        card.value.style.backgroundColor = "#D91667";
        weight.value.style.backgroundColor = "#D91667";
        subtitleMessage.value = false;
      }
    };

    return {
      selected,
      toggleProduct,
      subtitleMessage,
      card,
      weight,
      addHover,
      deleteHover,
    };
  },
};
</script>

<style lang="scss" scoped>
.product {
  &__card {
    position: relative;
    margin-bottom: 14px;
    padding: 4px;
    border-radius: 12px;
    background-color: $blue-border;
    clip-path: polygon(42.5px 0, 100% 0, 100% 100%, 0 100%, 0 42.5px);
    cursor: pointer;
    transition: 0.3s;
  }
  &__card-front {
    height: 472px;
    padding: 17px 47px;
    border-radius: 10px;
    background-image: url("@/assets/images/cat.png");
    background-repeat: no-repeat;
    background-position: left -24px bottom -88px;
    background-color: $white-bg;
    clip-path: polygon(40px 0, 100% 0, 100% 100%, 0 100%, 0 40px);
    @media screen and (max-width: 480px) {
      padding: 17px 35px;
    }
  }
  &__subtitle {
    margin-bottom: 5px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: $gray-color;
    transition: 0.3s;
    &--message {
      color: $pink-message-color;
    }
  }
  &__title {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    font-weight: 700;
    color: $black-color;
  }
  &__name {
    font-size: 48px;
    line-height: 56px;
  }
  &__with {
    font-size: 24px;
    line-height: 28px;
  }
  &__list {
    display: flex;
    flex-direction: column;
  }
  &__item {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: $gray-color;
    span {
      font-weight: 700;
    }
  }
  &__weight {
    position: absolute;
    bottom: 12px;
    right: 12px;
  }
  &__description {
    font-weight: 400;
    font-size: 13px;
    line-height: 18px;
    text-align: center;
    color: $white-color;
    span {
      color: $blue-color;
      button {
        text-decoration: underline;
        text-decoration-style: dashed;
        transition: 0.3s;
        &:hover {
          color: $blue-border;
        }
      }
    }
    &--none {
      color: $yellow-color;
    }
  }
}
.weight {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 6px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: $blue-color;
  transition: 0.3s;
  z-index: 1;
  &__number {
    font-size: 42px;
    line-height: 100%;
    color: $white-color;
  }
  &__type {
    font-size: 21px;
    line-height: 100%;
    color: $white-color;
  }
}
.product__card--none {
  background-color: $light-gray-color;
  pointer-events: none;
  .product__card-front {
    opacity: 0.5;
  }
  .weight {
    background-color: $light-gray-color;
  }
}
</style>
