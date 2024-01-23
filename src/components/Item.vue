<template>
    <div :style="cardStyle">
      <img :src="data.image" :alt="data.nadpis" :style="imageStyle" />
      <div class="texty" :style="textStyle">
        <h2 :style="titleStyle">{{ data.nadpis }}</h2>
        <p :style="descriptionStyle">{{ data.popis }}</p>
      </div>
    </div>
  </template>
  
  <script> 
  export default {
    props: {
      data: {
        type: Object,
        required: true,
      },
      cardStyle: {
        type: Object,
        default: () => ({display: "flex", flexDirection: "column", backgroundColor: "black", color: "aliceblue", width: "50%" }),
      },
      imageStyle: {
        type: Object,
        default: () => ({ maxWidth: "450px", }),
      },
      textStyle: {
        type: Object,
        default: () => ({}),
      },
      titleStyle: {
        type: Object,
        default: () => ({padding: "30px",}),
      },
      descriptionStyle: {
        type: Object,
        default: () => ({ padding: "30px", }),
      },
    },
  };
  </script>
  
  <style scoped>

  </style>
  