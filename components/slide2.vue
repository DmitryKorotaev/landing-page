<template>
  <b-container fluid>
    <b-row>
      <b-col sm="12" md="6" lg="5">
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
      <b-col sm="12" md="6" lg="7">
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
  padding: 2.8rem;
  background-color: white;
}
.col-sm-12,
.col-md-6,
.col-lg-7 {
  padding-right: 0px;
  padding-left: 0px;
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
  border-radius: 0px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.img1 {
  width: 58%;
}
.img2 {
  width: 39%;
  align-self: center;
  margin-top: -8%;
  right: -2%;
}
.img3 {
  width: 58%;
  margin-top: -20%;
  right: -20%;
  z-index: 10;
}
.darkening {
  padding: 1.3rem;
  background-color: rgb(244, 246, 246);
}
.thinCard {
  text-align: start;
}
@media (max-width: 768px) {
  .container-fluid {
    padding: 0rem;
  }
}
</style>
