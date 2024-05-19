<template>
  <b-container fluid>
    <b-modal
      v-model="isModalVisible"
      @hidden="$emit('closeModal')"
      header-class="modal-title"
      title="Оставить заявку"
    >
      <form @submit.prevent="submitForm">
        <b-form-group label="Введите имя">
          <b-form-input
            v-model="formData.name"
            placeholder="Введите имя"
            required
          >
          </b-form-input>
        </b-form-group>
        <b-form-group label="Введите E-mail">
          <b-form-input
            v-model="formData.email"
            type="email"
            placeholder="mail@mail.ru"
            required
          >
          </b-form-input>
        </b-form-group>
        <b-form-group label="Введите номер телефона">
          <b-form-input
            v-model="formData.phone_number"
            placeholder="xxx-xxx-xxx"
            required
          >
          </b-form-input>
        </b-form-group>

        <b-button type="submit" class="red btn-lg btn-block"
          >Отправить</b-button
        >
      </form>
      <div slot="modal-footer" header-class="modal-footer">
        Нажимая на кнопку, Вы принимаете
        <router-link to="">Положение</router-link> и
        <router-link to="">Согласие</router-link> на обработку персональных
        данных.
      </div>
    </b-modal>
  </b-container>
</template>

<script>
export default {
  props: {
    modalVisible: Boolean,
  },
  data() {
    return {
      isModalVisible: false,
      formData: {
        name: "",
        email: "",
        phone_number: "",
      },
    };
  },
  watch: {
    modalVisible(newVal) {
      this.isModalVisible = newVal;
      this.$emit("update:modalVisible", newVal);
    },
  },

  methods: {
    submitForm() {
      console.log("отправленно", this.formData);
      this.$emit("closeModal");
    },
  },
};
</script>

<style scoped>
::v-deep .modal-title,
::v-deep .modal-footer {
  font-family: "Roboto", sans-serif;
  font-weight: 200;
  font-size: 0.9rem;
  color: rgb(63, 63, 63);
}
::v-deep .modal-footer {
  padding: 0;
  border-top: 0;
  text-align: center;
}
::v-deep .modal-dialog {
  margin: 1.5rem;
}
@media (min-width: 576px) {
  ::v-deep .modal-dialog {
    max-width: 400px;
    margin: 2.75rem auto;
  }
}
</style>
