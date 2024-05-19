<template>
  <div>
    <slide0 />
    <slide1 />
    <slide2 />
    <form1 />
    <prices />
    <slide3v2 />
    <imgSlide />
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
import slide3v2 from "../components/slide3v2.vue";
import imgSlide from "../components/imgSlide.vue";
import slide4v2 from "../components/slide4v2.vue";
import comment from "../components/comment.vue";

export default {
  name: "IndexPage",

  components: {
    slide0,
    slide1,
    slide2,
    form1,
    prices,
    slide3v2,
    imgSlide,
    slide4v2,
    comment,
  },
};
</script>
<style scoped></style>
