<template>
  <b-container fluid>
    <h4 class="bold dark-bg">Услуги, которые мы предлагаем</h4>
    <h5 class="thin dark-bg">
      Выберите услугу, которая подходит под решение ваших задач
    </h5>
    <b-row>
      <b-col
        v-for="(item, index) in pricesCard"
        :key="index"
        class="col-lg-4 col-md-6 col-sm-12 mb-3"
      >
        <b-card>
          <b-card-img :src="item.image" alt="Card image"> </b-card-img>
          <b-card-title class="boldCard dark-bg"
            >{{ item.title }}
          </b-card-title>
          <b-card-text class="thinCard dark-bg">{{
            item.description
          }}</b-card-text>
          <h2 class="boldCard dark-bg">от {{ item.price }}</h2>
          <b-button class="red btn-lg btn-block">Выбрать</b-button>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import data from "~/assets/data.js";
export default {
  data() {
    return {
      pricesCard: data,
    };
  },
};
</script>

<style scoped>
.container-fluid {
  background-color: white;
}
h2 {
  font-size: 1.7rem;
}
h4 {
  padding: 1rem 1rem 0rem 1rem;
  color: rgb(82, 81, 81);
}
h5 {
  padding: 1rem;
}
.card {
  border: 0;
  border-radius: 0;
}
.card-body {
  padding: 0.5rem;
}
img {
  width: 100%;
  height: 15rem; /* или любая другая фиксированная высота */
  object-fit: cover; /* сохраняет пропорции изображения и растягивает его, чтобы оно полностью заполнило заданные размеры */
  border-radius: 0;
}
.thinCard {
  font-size: 1rem;
}
</style>
