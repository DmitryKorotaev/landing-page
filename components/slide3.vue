<template>
  <b-container fluid>
    <b-row>
      <b-col md="6">
        <b-card>
          <b-card-title class="boldCard dark-bg">
            Пройдите диагностику
          </b-card-title>
          <b-card-text class="thinCard dark-bg">
            Результаты диагностики отображаются для владельца автомобиля,
            например в виде сигнала о неисправности на приборной панели, а также
            используются автомеханиками и диагностами
          </b-card-text>
          <b-button class="red btn-lg btn-block"> Записаться </b-button>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card class="no-padding p-0"
          ><b-card-img src="/img/эстакада.jpg"></b-card-img>
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
  padding: 4rem 0rem;
}

.card {
  border: 0;
  border-radius: 0;
  margin: 3rem;
  /* margin-left: 2rem;
  margin-right: 2rem; */
  padding: 2rem;
}

.no-padding .card-body {
  padding: 0;
}
.thinCard {
  text-align: start;
  font-size: 1rem;
}
</style>
