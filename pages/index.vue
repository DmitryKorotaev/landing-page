<template>
  <div>
    <slide0 />
    <slide1 />
    <slide2 />
    <form1 />
    <prices />
    <!-- <slide3 /> -->
    <slide3v2 />
    <imgSlide />
    <!-- <slide4 /> -->
    <slide4v2 />
    <comment />
  </div>
</template>

<script>
import slide0 from "../components/slide0.vue";
import slide1 from "../components/slide1.vue";
import slide2 from "../components/slide2.vue";
import form1 from "../components/form1.vue";

import prices from "../components/prices.vue";
// import slide3 from "../components/slide3.vue";
import slide3v2 from "../components/slide3v2.vue";
import imgSlide from "../components/imgSlide.vue";
// import slide4 from "../components/slide4.vue";
import slide4v2 from "../components/slide4v2.vue";
import comment from "../components/comment.vue";
// import yandexMap from "../components/yandexMap.vue";

export default {
  name: "IndexPage",

  components: {
    slide0,
    slide1,
    slide2,
    form1,
    prices,
    // slide3,
    slide3v2,
    imgSlide,
    // slide4,
    slide4v2,
    comment,
  },
};
</script>
<style scoped>
/* .card {
  border: 0px;
  border-radius: 0px;
  background-color: transparent;
}
.card-body {
  padding: 0rem;
} */
/* .overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);  Прозрачный фон для текста 
} 
.overlay button {
  background-color: transparent;  прозрачный фон 
  border: 0.15rem solid white;
  color: white;
  padding: 1rem;
  margin: 1rem;
  min-width: 17rem;
}
.overlay button:hover {
  background-color: rgb(252, 251, 251);
  color: rgb(232, 17, 17);
}
.overlay button:active {
  background-color: white;
  color: white;  Цвет текста при нажатии 
} */
</style>
