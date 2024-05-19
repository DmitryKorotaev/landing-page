<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <b-card>
          <b-card-title class="bold dark-bg">
            Гарантия на ремонт автомобиля
          </b-card-title>
          <b-card-text class="thin dark-bg">
            Качественные комплектующие, современное оборудование и опытные
            специалисты, - всё это позволяет нам быть уверенными в своих силах.
            Мы предоставляем гарантию на 10 лет
          </b-card-text>
          <b-button @click="showModal" class="red btn-lg btn-block">
            Записаться
          </b-button>
          <modalForm
            :modalVisible="modalVisible"
            @closeModal="modalVisible = false"
          />
        </b-card>
      </b-col>
      <b-col>
        <b-card class="no-padding p-0"
          ><b-card-img src="/img/slide4.jpg"></b-card-img>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import modalForm from "./modalForm.vue";
export default {
  components: {
    modalForm,
  },
  data() {
    return {
      modalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.modalVisible = true;
    },
  },
};
</script>
<style scoped>
.container-fluid {
  padding: 4rem 0rem;
}

.card {
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
