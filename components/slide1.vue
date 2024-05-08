<template>
  <div>
    <div class="bold">Почему выбирают именно нас</div>
    <div class="thin">
      Причины, по которым нашу компанию выбирают многочисленные клиенты
    </div>
    <b-row>
      <b-col md="4">
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
      </b-col>
      <b-col md="4">
        <b-card class="transparent-card">
          <div class="svg-container">
            <b-card-img src="/img/Запчасти.svg" class="svg-img"> </b-card-img>
          </div>

          <b-card-title class="boldCard">
            Запчасти и моторное масло
          </b-card-title>

          <b-card-text class="thinCard">
            Мы предоставляем клиентам возможность приобрести запчасти и моторное
            маслом по самым доступным ценам
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.transparent-card {
  background-color: transparent;
  border: none;
}
.svg-container {
  display: flex;
  justify-content: center;
}
@media screen and (min-width: 1100px) {
  .svg-img {
    width: 16rem;
    height: auto; /* Чтобы сохранить пропорции */
  }
}
@media screen and (min-width: 320px) and (max-width: 767px) {
  .svg-img {
    width: 10rem;
    height: auto; /* Чтобы сохранить пропорции */
  }
}
/* .b-card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
} */
/* .card-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
} */
</style>
