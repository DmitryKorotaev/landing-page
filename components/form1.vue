<template>
  <b-container fluid>
    <div class="indent">
      <b-card>
        <b-card-title class="boldCardForm">
          Оставьте заявку на сайте, чтобы записаться на диагностику
        </b-card-title>
        <b-form @submit="onSubmit" @reset="onReset" class="inline-form">
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Введите имя"
            required
          ></b-form-input>

          <b-form-input
            id="input-2"
            v-model="form.name"
            placeholder="mail@mail.ru"
            required
          ></b-form-input>

          <b-form-input
            id="input-3"
            v-model="form.phone_number"
            placeholder="xxx-xxx-xxx"
            required
          ></b-form-input>

          <b-button class="red btn-lg btn-block" type="submit"
            >Записаться</b-button
          >
        </b-form>
        <b-card-text class="thinCard dark-bg">
          Нажимая на кнопку, Вы принимаете
          <router-link to="">Положение</router-link> и
          <router-link to="">Согласие</router-link> на обработку персональных
          данных.
        </b-card-text>
      </b-card>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        phone_number: "",
      },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
    },
  },
};
</script>

<style scoped>
.container-fluid {
  padding-right: 0px;
  padding-left: 0px;
}
.indent {
  padding: 4rem;
}
.inline-form {
  display: flex;
  align-items: center;
  padding: 4rem;
}
.inline-form > * {
  margin-right: 10px;
}
input {
  width: 100%;
  /* padding: 5px 0; */
  border: none;
  border-bottom: 1px solid #adabab; /* Подчеркивание */
  outline: none;
  border-radius: 0; /* Убираем закругление */
}

/* Новый класс для убирания стандартного стиля фокусировки */
input:focus {
  /* outline: none; */
  box-shadow: none;
  border-bottom-color: rgb(118, 118, 118);
}

.thinCard.dark-bg {
  font-weight: 100;
  font-size: 1rem;
  color: #adabab;
}
@media screen and (max-width: 900px) {
  .inline-form {
    padding: 0.5rem;
    flex-direction: column; /* Изменяем направление flex на вертикальное */
  }
  .inline-form > * {
    margin-right: 0; /* Убираем правый отступ */
    margin-bottom: 10px; /* Добавляем отступ между элементами в колонке */
  }
  .indent {
    padding: 1rem;
  }
}
</style>
