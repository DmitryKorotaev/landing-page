<template>
  <div class="gray">
    <header>
      <InfoHeader />
    </header>
    <main>
      <Nuxt />
    </main>
    <footer>
      <yandexMap />
      <infoFooter />
    </footer>
  </div>
</template>

<script>
import InfoHeader from "../components/infoHeader.vue";
import yandexMap from "../components/yandexMap.vue";
import infoFooter from "../components/infoFooter.vue";

export default {
  components: {
    InfoHeader,
    yandexMap,
    infoFooter,
  },
};
</script>

<style>
.gray {
  background-color: rgb(68, 66, 66);
  min-height: 100vh;
}
</style>
