<template>
  <b-container fluid>
    <div class="bold dark-bg">Услуги, которые мы предлагаем</div>
    <div class="thin dark-bg mb-4">
      Выберите услугу, которая подходит под решение ваших задач
    </div>
    <b-row>
      <b-col
        v-for="(item, index) in pricesCard"
        :key="index"
        sm="12"
        md="6"
        lg="4"
      >
        <b-card class="mb-4">
          <b-card-img :src="item.image" alt="Card image"> </b-card-img>
          <b-card-title class="boldCard dark-bg mt-3"
            >{{ item.title }}
          </b-card-title>
          <b-card-text class="thinCard dark-bg">{{
            item.description
          }}</b-card-text>
          <h2 class="boldCard dark-bg">от {{ item.price }}</h2>
          <b-button @click="showModal(index)" class="red btn-lg btn-block"
            >Выбрать</b-button
          >
        </b-card>
      </b-col>
    </b-row>
    <ModalForm
      :modalVisible="modalVisible"
      @closeModal="modalVisible = false"
      :selectedItem="selectedItem"
    />
  </b-container>
</template>

<script>
import { data } from "~/assets/data.js";

export default {
  data() {
    return {
      pricesCard: data,
      selectedItem: null, // Сюда будем записывать выбранную карточку
      modalVisible: false,
    };
  },

  methods: {
    showModal(index) {
      // Записываем выбранную карточку в переменную selectedItem
      this.selectedItem = this.pricesCard[index];
      this.modalVisible = true;
    },
  },
};
</script>

<style scoped>
.container-fluid {
  padding: 2.5rem 2.5rem 0rem 2.5rem;
  background-color: white;
}
h2 {
  font-size: 1.7rem;
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
@media (max-width: 768px) {
  .container-fluid {
    padding: 0rem;
  }
  .thin {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
}
</style>
