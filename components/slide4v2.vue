<template>
  <b-container fluid>
    <b-card>
      <b-row>
        <b-col class="p-0" sm="12" md="6" lg="7">
          <img src="/img/slide4.jpg" alt="" />
        </b-col>
        <b-col
          sm="12"
          md="6"
          lg="5"
          class="d-flex flex-column justify-content-center"
        >
          <b-card-title class="bold dark-bg">
            Гарантия на ремонт автомобиля
            <div class="title-line"></div>
          </b-card-title>
          <b-card-text class="thin dark-bg">
            Качественные комплектующие, современное оборудование и опытные
            специалисты, - всё это позволяет нам быть уверенными в своих силах.
            Мы предоставляем гарантию на 10 лет
          </b-card-text>
          <div
            class="d-flex flex-column justify-content-between padding-bottom"
          >
            <b-button @click="showModal" class="red btn-lg custom-btn-lg">
              Записаться
            </b-button>
          </div>
          <ModalForm
            :modalVisible="modalVisible"
            @closeModal="modalVisible = false"
          />
        </b-col>
      </b-row>
    </b-card>
  </b-container>
</template>

<script>
export default {
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
  padding: 4rem;
}
.col {
  padding-left: 0rem;
  padding-right: 0rem;
}
.card-body {
  padding: 0rem;
}
img {
  width: 100%;
  height: 100%;
}
.title-line {
  border-bottom: 2px solid #ff0000; /* Цвет и толщина линии */
  width: 25%; /* Ширина линии */
  margin-top: 1.3rem; /* Отступ от заголовка */
}
.bold {
  padding: 3rem 0rem 0.5rem;
}

@media (max-width: 768px) {
  .container-fluid {
    padding: 1.5rem;
  }
  .padding-bottom {
    padding: 0rem 0rem 1rem 0rem;
  }
}
@media (min-width: 800px) and (max-width: 1060px) {
  .thin {
    font-size: 0.9rem;
  }
}
</style>
