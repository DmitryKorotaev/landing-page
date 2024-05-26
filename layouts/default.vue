<template>
  <div class="gray">
    <header>
      <InfoHeader />
    </header>
    <main>
      <Nuxt />
    </main>
    <footer>
      <YandexMap />
      <InfoFooter />
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style>
.gray {
  background-color: rgb(68, 66, 66);
  min-height: 100vh;
}
</style>
