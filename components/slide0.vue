<template>
  <b-container fluid class="dark-overlay">
    <b-row>
      <b-col>
        <b-card>
          <b-card-title class="bold"
            >Ремонт и технический осмотр автомобиля</b-card-title
          >
          <b-card-text class="thin"
            >Наша основная задача — качественный ремонт по доступным ценам
          </b-card-text>
          <div class="button-container">
            <b-btn @click="showModal" class="adaptive-button"
              >Пройти диагностику</b-btn
            >
            <b-btn @click="showModal" class="adaptive-button"
              >Получить консультацию</b-btn
            >
          </div>
          <ModalForm
            :modalVisible="modalVisible"
            @closeModal="modalVisible = false"
          />
        </b-card>
      </b-col>
    </b-row>
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
.dark-overlay {
  position: relative;
  background-image: url("/img/huolto_yleiskuvakorjaamosta_1920x1080.jpg");
  background-size: cover;
  background-position: center;
}

.dark-overlay::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(
    0,
    0,
    0,
    0.6
  ); /* Чем ниже значение альфа-канала, тем больше прозрачность */
}
.card {
  background-color: rgb(255, 255, 255, 0);
}
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.button-container button {
  display: flex; /* позволяет располагать элементы внутри контейнера в строчку или колонку, а также контролировать их выравнивание, порядок и расстояние между ними.*/
  flex-wrap: wrap; /*если элементы не помещаются в одной строке из-за ограничений ширины экрана или размеров контейнера, они автоматически переносятся на новую строку. */
  justify-content: center;
  background-color: transparent;
  border: 0.15rem solid white;
  border-radius: 0rem;
  color: white;
  padding: 1rem;
  margin: 1rem;
  min-width: 17rem;
}
.button-container button:hover {
  background-color: rgb(252, 251, 251);
  color: rgb(232, 17, 17);
}
.button-container button:active {
  background-color: white;
  color: white;
}

@media (max-width: 768px) {
  .button-container {
    flex-direction: column;
  }
}
@media (min-width: 768px) {
  .bold {
    font-weight: 400;
    font-size: 3.4rem;
    margin: 4rem 0rem 1rem 0rem;
  }
  .thin {
    font-size: 1.8rem;
  }
  .dark-overlay {
    height: 90vh; /* Устанавливаем высоту контейнера на высоту окна браузера */
    display: flex; /* Используем flexbox для заполнения доступной высоты */
    flex-direction: column; /* Устанавливаем направление flex-контейнера на вертикальное */
  }
}
</style>
