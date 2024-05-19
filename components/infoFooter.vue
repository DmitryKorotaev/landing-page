<template>
  <b-container fluid>
    <b-card class="transparent-card">
      <b-row>
        <b-col sm="12" md="12" lg="2">
          <b-card-title class="logo text-center"> YourLogo </b-card-title>
        </b-col>
        <b-col sm="12" md="12" lg="6">
          <b-card-text class="thinStartFooter text-center">
            ООО «СтройТрейд», 123456, г.Москва, ул. Центральная 1, офис 1 ИНН
            1234567890 ОГРН 123456789012
            <router-link to="#" id="policy-link" class="d-block"
              >Политика конфиденциальности</router-link
            >
            <b-popover
              trigger="hover"
              placement="bottom"
              title="Политика конфиденциальности"
              target="policy-link"
            >
              Данный сайт уважает Ваше право и соблюдает конфиденциальность при
              заполнении, передаче и хранении Ваших конфиденциальных сведений.
              Размещение заявки на данном сайте означает Ваше согласие на
              обработку данных и дальнейшей передачи ваших контактных данных
              нашей компании. Под персональными данными подразумевается
              информация, относящаяся к субъекту персональных данных, в
              частности имя, контактные реквизиты (адрес электронной почты) и
              иные данные, относимые Федеральным законом от 27 июля 2006 года №
              152-ФЗ «О персональных данных» к категории персональных данных.
              Целью обработки персональных данных является информирование об
              оказываемых услугах нашей компании.
            </b-popover>
          </b-card-text>
        </b-col>
        <b-col sm="12" md="12" lg="4">
          <b-card-title class="boldFooter text-center">
            8 800 333 22 33
          </b-card-title>

          <b-card-text class="thinFooter text-center">
            Звонок по России бесплатный
          </b-card-text>
        </b-col>
      </b-row>
    </b-card>
  </b-container>
</template>

<script>
export default {};
</script>
<style scoped>
.container-fluid {
  padding: 1.8rem 2.5rem 2.5rem 2.5rem;
}

.card-body {
  padding: 0;
}
.card-title {
  margin-bottom: 0rem;
}
.logo {
  font-size: 1.8rem;
}
.logo,
.thinStartFooter {
  color: white;
  text-align: start;
  font-family: "Roboto", sans-serif;
}
.boldFooter,
.thinFooter {
  color: white;
  font-family: "Roboto", sans-serif;
  text-align: end;
}
.thinStartFooter {
  font-weight: 200;
  font-size: 1.1rem;
}
.boldFooter {
  font-weight: 400;
  font-size: 1.4rem;
}
.thinFooter {
  font-weight: 200;
  font-size: 1.1rem;
}
@media (max-width: 1000px) {
  .text-center {
    text-align: center !important;
  }
}
</style>
