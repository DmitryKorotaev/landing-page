<template>
  <b-container fluid>
    <div class="bold">Почему выбирают именно нас</div>
    <div class="thin">
      Причины, по которым нашу компанию выбирают многочисленные клиенты
    </div>
    <b-row>
      <!-- <b-col md="4">
        <b-card class="transparent-card">
          <div class="svg-container">
            <b-card-img
              src="/img/Диагностика.svg "
              class="svg-img"
            ></b-card-img>
          </div>
          <b-card-title class="boldCard">Диагностика и ремонт</b-card-title>

          <b-card-text class="thinCard"
            >Наша компания осуществляет проверку и исправление найденных
            неисправностей автомобилей в кратчайшие сроки</b-card-text
          >
        </b-card>
      </b-col>
      <b-col md="4">
        <b-card class="transparent-card">
          <div class="svg-container">
            <b-card-img src="/img/ТехОбслуж.svg" class="svg-img"> </b-card-img>
          </div>
          <b-card-title class="boldCard">
            Техническое обслуживание
          </b-card-title>
          <b-card-text class="thinCard">
            Мы проводим процедуры, которые помогают поддерживать автомобиль в
            рабочем состоянии на протяжении длительного времени
          </b-card-text>
        </b-card>
      </b-col> -->
      <b-col md="4" v-for="(item, index) in data1" :key="index">
        <b-card class="transparent-card">
          <div class="svg-container">
            <b-card-img :src="item.image" class="svg-img"> </b-card-img>
          </div>

          <b-card-title class="boldCard">
            {{ item.title }}
          </b-card-title>

          <b-card-text class="thinCard">
            {{ item.description }}
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { data1 } from "../assets/data.js";
export default {
  data() {
    return {
      data1: data1,
    };
  },
};
</script>

<style scoped>
.container-fluid {
  padding: 2.5rem;
}
.svg-container {
  display: flex;
  justify-content: center;
}
.svg-img {
  width: 100%;
  height: auto;
}
.card-title {
  margin-top: 1rem;
}
.thinCard {
  padding: 0rem;
}
@media screen and (min-width: 1100px) {
  .svg-img {
    width: 18rem;
    height: auto; /* Чтобы сохранить пропорции */
  }
}
@media screen and (min-width: 320px) and (max-width: 767px) {
  .svg-img {
    width: 10rem;
    height: auto; /* Чтобы сохранить пропорции */
  }
}
</style>
