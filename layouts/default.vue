<template>
  <div class="gray">
    <header>
      <Info />
    </header>
    <main>
      <Nuxt />
    </main>
    <footer></footer>
  </div>
</template>

<script>
import Info from "../components/info.vue";

export default {
  components: {
    Info,
  },
};
</script>

<style>
.gray {
  background-color: rgb(68, 66, 66);
  min-height: 100vh;
}
</style>
