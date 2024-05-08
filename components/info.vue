<template>
  <div>
    <!-- As a link -->
    <b-navbar variant="faded" type="light">
      <b-navbar-nav class="remove-flex mr-auto">
        <b-navbar-brand class="font-weight-bold text-left" href="#"
          >BootstrapVue</b-navbar-brand
        >
        <b-nav-text class="font text-left"> 8 800 333 22 33 </b-nav-text>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto remove-flex">
        <b-nav-text class="font text-rigth"
          >Автосервис в Москве и Московской области</b-nav-text
        >
        <b-nav-text class="font text-right">
          г.Москва, ул. Центральная 1, офис 100
        </b-nav-text>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.remove-flex {
  display: block; /* Или другое значение, которое вам нужно */
  font-size: 1em;
}

.font {
  display: block;
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 200;
  font-size: 0.9rem;
  padding: 1rem 0;
}
</style>
