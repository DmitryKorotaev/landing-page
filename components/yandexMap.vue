<template>
  <b-container fluid>
    <b-card>
      <b-row no-gutters>
        <b-col sm="12" md="6" lg="7" class="map-background">
          <iframe
            fluid
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Aad67c13facf37d451b92c15daf0e62cef5195fb7be0d205f1bc4a06972709d79&amp;source=constructor"
            frameborder="0"
            class="map-frame"
          ></iframe>
        </b-col>
        <b-col sm="12" md="6" lg="5">
          <div>
            <b-card-text class="thinCard dark-bg p-3"
              >Контанктная информация:</b-card-text
            >
            <ul class="custom-list">
              <li>Москва, школьный проез 1.</li>
              <li>E-mail: Test@yandex.ru</li>
              <li>Телефон: 8 800 300 06 00 сервиса</li>
              <li>Телефон: 8 800 340 06 00 офиса</li>
              <li>Контактное лицо: Степанов В.И.</li>
            </ul>

            <b-card-text class="thinCard dark-bg text-center">
              Присоединяйтесь к нам в социальных сетях!
            </b-card-text>
            <div class="text-center">
              <font-awesome-icon
                :icon="['fab', 'telegram']"
                class="telegram"
                size="2x"
              />
              <font-awesome-icon :icon="['fab', 'vk']" class="vk" size="2x" />
              <font-awesome-icon
                :icon="['fab', 'youtube']"
                class="youtube"
                size="2x"
              />
            </div>
          </div>
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
  padding: 4rem;
}

.card-body {
  padding: 0rem;
}
.map-frame {
  height: 450px;
  width: 100%;
}
.vk,
.telegram,
.youtube {
  margin: 0rem 0.5rem 1rem 0.5rem;
}
.vk {
  color: rgb(89, 125, 163);
}
.telegram {
  color: rgb(0, 136, 204);
}
.youtube {
  color: rgb(255, 0, 0);
}
.thinCard {
  text-align: start;
  font-size: 1.2rem;
}
.custom-list li {
  margin-left: 1.2rem;
  font-weight: 200;
  font-size: 1.3rem;
  padding: 0.2rem;
  color: rgb(63, 63, 63);
}
.thinCard {
  padding: 0.25rem;
}
@media (max-width: 991px) {
  .container-fluid {
    padding: 1.5rem;
  }
}
@media (min-width: 994px) and (max-width: 1100) {
  .map-frame {
    height: 500px !important;
  }
}
</style>
