<template>
  <div>
    <div class="wrapper">
      <Item :data="cardData1" :cardStyle="cardStyle1" :titleStyle="titleStyle1" :descriptionStyle="descriptionStyle1"/>
      <Item :data="cardData2" :cardStyle="cardStyle2" :titleStyle="titleStyle2" :descriptionStyle="descriptionStyle2" :imageStyle="imageStyle2"/>
    </div>
  </div>
</template>

<script>
import Item from '@/components/Item.vue';
import { aboutPristup } from "../stores/about";

export default {
  components: {
    Item,
  },
  data() {
    //------------------------------ Item 1 style
    const { data: about } = aboutPristup();

    const cardData1 = about[0];
    const cardStyle1 = {
      display: "flex",
      flexDirection: "row",
      backgroundColor: "black",
      color: "white",
      width: "100%",
    };
    const titleStyle1 = {
      fontSize: "25px",
      fontWeight: "bold",
      padding: "20px",
    };
    const descriptionStyle1 = {
      fontSize: "18px",
      padding: "20px"
    };


    //------------------------------ Item 2 style
    const cardData2 = about[1];
    const cardStyle2 = {
      display: "flex",
      flexDirection: "row-reverse",
      backgroundColor: "white",
      color: "black",
      width: "100%",
    };
    const titleStyle2 = {
      fontSize: "25px",
      fontWeight: "bold",
      textAlign: "right",
      color: "red",
      padding: "20px"
    };
    const descriptionStyle2 = {
      fontSize: "22px",
      padding: "20px",
      textAlign: "right",
      fontFamily: "Georgia",
    };
    const imageStyle2 = {
      maxWidth: "750px"
    };

    return {
      cardData1,
      cardStyle1,
      titleStyle1,
      descriptionStyle1,
      cardData2,
      cardStyle2,
      titleStyle2,
      descriptionStyle2,
      imageStyle2,
    };
  },
};
</script>

