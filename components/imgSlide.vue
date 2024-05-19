<template>
  <b-container fluid>
    <div class="bold dark-bg">Как мы работаем</div>
    <div class="thin dark-bg mb-4">
      Наша основная задача — качественный ремонт по доступным ценам
    </div>
    <b-row>
      <b-col
        v-for="(item, index) in cardImage"
        :key="index"
        sm="12"
        md="6"
        lg="4"
      >
        <b-card class="mb-4">
          <b-card-img :src="item.image"> </b-card-img>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { image } from "~/assets/data.js";
export default {
  data() {
    return {
      cardImage: image,
    };
  },
};
</script>

<style scoped>
.container-fluid {
  background-color: white;
  padding: 2.5rem;
}

.card-body {
  padding: 0.5rem;
}
img {
  border-radius: 0;
}
@media (max-width: 768px) {
  .container-fluid {
    padding: 0rem;
  }
  .thin {
    margin-left: 1.2rem;
    margin-right: 1.2rem;
  }
}
</style>
