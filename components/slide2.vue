<template>
  <b-container fluid>
    <b-row class="">
      <b-col md="6" class="mt-5 mb-5">
        <b-card class="transparent-card">
          <div class="darkening">
            <b-card-title class="boldCard dark-bg">
              Все в одном месте
            </b-card-title>
            <b-card-text class="thinCard dark-bg">
              Автосервис – это комплекс мероприятий по техобслуживанию,
              текущему, восстановительному и капитальному ремонту
              автотранспорта, а также по установке на него дополнительного
              оборудования.
            </b-card-text>
            <b-card-text class="thinCard dark-bg">
              Наш сервисный центр объединил в себе автосервис, ТО, диагностику и
              шиномонтаж. У нас работают механики и профессиональные мастера с
              огромным опытом работы по ремонту. Запишись на авторемонт через
              сайт и получи скидку 5% на услуги.
            </b-card-text>
          </div>
        </b-card>
      </b-col>
      <b-col md="6" class="mt-5 mb-5">
        <b-card class="transparent-card">
          <div class="img-container">
            <div class="img1 img-rel">
              <b-card-img src="/img/сервис4.jpg"> </b-card-img>
            </div>
            <div class="img2 img-rel">
              <b-card-img src="/img/сервис.jpg" class="svg-img"> </b-card-img>
            </div>
            <div class="img3 img-rel">
              <b-card-img src="/img/сервис3.jpg" class="svg-img"> </b-card-img>
            </div>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {};
</script>

<style scoped>
.container-fluid {
  background-color: white;
}
.transparent-card {
  border: none;
  border-radius: 0px;
}

.img-container {
  display: flex;
  flex-wrap: wrap;
}
.img-rel {
  position: relative;
}
img {
  width: 100%;
  height: auto;
  display: block;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.041);
}
.img1 {
  width: 58%;
}
.img2 {
  width: 40%;
  align-self: center;
}
.img3 {
  width: 58%;
  margin-top: -20%;
  right: -20%;
  z-index: 10;
}
.darkening {
  overflow: hidden; /* Обрезать содержимое, которое выходит за пределы */
  height: 50%; /* Задать высоту карточки на 50% экрана */
  display: flex;
  flex-direction: column;
  background-color: rgb(244, 246, 246);
}
.thinCard {
  text-align: start;
}
@media screen and (min-width: 900px) {
}
/* .svg-img {
  height: auto;
  position: absolute;
}
.svg-img:nth-child(1) {
  z-index: 1;
  width: 20rem;
  top: 3rem;
  left: 1rem;
  transform: translate(-50%, -50%);
}

.svg-img:nth-child(2) {
  z-index: 2;
  width: 15rem;
  top: 30rem;
  left: 14rem;
}

.svg-img:nth-child(3) {
  z-index: 0;
  width: 20rem;
  top: 12rem;
  left: 17rem;
} */
</style>
