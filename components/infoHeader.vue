<template>
  <!-- <div>
    
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
  </div> -->
  <b-container fluid>
    <b-card class="transparent-card margin">
      <b-row>
        <b-col sm="12" md="12" lg="2" class="d-flex align-items-center">
          <b-card-title class="logo"> YourLogo </b-card-title>
        </b-col>

        <b-col sm="12" md="12" lg="6" class="d-flex align-items-end">
          <div class="w-100">
            <b-card-text class="thinHeaderCenter">
              Автосервис в Москве и Московской области
            </b-card-text>
          </div>
        </b-col>

        <b-col sm="12" md="12" lg="4">
          <b-card-title class="boldHeader"> 8 800 333 22 33 </b-card-title>

          <b-card-text class="thinHeader">
            г.Москва, ул. Центральная 1, офис 100
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
/* .remove-flex {
  display: block; 
  font-size: 1em;
}

.font {
  display: block;
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 200;
  font-size: 0.9rem;
  padding: 1rem 0;
} */

.container-fluid {
  padding: 2.5rem;
}

.card-body {
  padding: 0;
}
.card-title {
  margin-bottom: 0rem;
}
.end-text {
  align-items: flex-end;
}
.logo {
  font-size: 1.8rem;
}
.thinHeaderCenter {
  font-weight: 200;
  font-size: 1.2rem;
  text-align: center;
}
.boldHeader,
.thinHeader,
.thinHeaderCenter,
.logo {
  color: white;
  font-family: "Roboto", sans-serif;
}

.boldHeader {
  font-weight: 200;
  font-size: 1.4rem;
  text-align: end;
}
.thinHeader {
  font-weight: 200;
  font-size: 1.2rem;
  text-align: end;
}
.thinHeaderBottom {
  align-items: flex-end;
}
@media (max-width: 900px) {
  .container-fluid {
    padding: 0.5rem 1rem;
  }
  .boldHeader {
    font-size: 1rem;
  }
  .thinHeader {
    font-size: 0.8rem;
  }
  .logo {
    font-size: 1.3rem;
  }
  .thinHeaderCenter {
    font-size: 0.8rem;
    align-items: start;
    width: 9rem;
  }
}
</style>
