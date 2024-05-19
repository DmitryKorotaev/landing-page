<template>
  <b-container fluid>
    <div class="bold dark-bg">Отзывы наших клиентов</div>
    <div class="thin dark-bg">Что говорят о нашей компании наши клиенты</div>
    <b-row>
      <b-col v-for="(item, index) in comment" :key="index">
        <b-card class="mb-4">
          <div class="text-center md-3">
            <b-avatar :src="item.image"></b-avatar>
          </div>
          <b-card-title class="boldCard dark-bg">{{ item.name }}</b-card-title>
          <b-card-text class="thinCard dark-bg">{{ item.comment }}</b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { comment } from "~/assets/data.js";
export default {
  data() {
    return {
      comment: comment,
    };
  },
};
</script>
<style scoped>
.container-fluid {
  padding: 2.5rem 2.5rem 1rem 2.5rem;
  background-color: white;
}

.b-avatar {
  width: 13rem;
  height: auto;
  margin: 0rem 0rem 1rem;
}
.boldCard {
  font-weight: 200;
}
.thinCard {
  color: rgb(87, 86, 86);
  font-size: 1rem;
}
</style>
