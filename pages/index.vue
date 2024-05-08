<template>
  <div>
    <b-card>
      <b-card-img src="@/static/img/huolto_yleiskuvakorjaamosta_1920x1080.jpg">
      </b-card-img>
      <div class="overlay">
        <b-card-text class="bold">
          Ремонт и технический осмотр автомобиля
        </b-card-text>
        <b-card-text class="thin">
          Наша основная задача — качественный ремонт по доступным ценам
        </b-card-text>
        <div>
          <b-button class="thin"> Пройти диагностику </b-button>
          <b-button class="thin"> Получить консультацию </b-button>
        </div>
      </div>
    </b-card>
    <slide1 />
    <slide2 />
    <form1 />
    <prices />
    <slide3 />
  </div>
</template>

<script>
import slide1 from "~/components/slide1.vue";
import slide2 from "~/components/slide2.vue";
import form1 from "~/components/form1.vue";
import prices from "~/components/prices.vue";
import slide3 from "~/components/slide3.vue";
export default {
  name: "IndexPage",

  components: {
    slide1,
    slide2,
    form1,
    prices,
    slide3,
  },
};
</script>
<style scoped>
.card {
  border: 0px;
  border-radius: 0px;
  background-color: transparent;
}
.card-body {
  padding: 0rem;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); /* Прозрачный фон для текста */
}
.overlay button {
  background-color: transparent; /* прозрачный фон */
  border: 0.15rem solid white;
  color: white;
  padding: 1rem;
  margin: 1rem;
  min-width: 17rem;
}
.overlay button:hover {
  background-color: rgb(252, 251, 251);
  color: rgb(232, 17, 17);
}
.overlay button:active {
  background-color: white;
  color: white; /* Цвет текста при нажатии */
}
</style>
