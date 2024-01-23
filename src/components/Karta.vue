<template>
    <div class="tr1">
    <img :src="data.image" :alt="data.meno" />
      <div class="trstyle">
      <h2>{{ data.meno }}</h2>
      <RouterLink 
      :to="{ name: 'detail', params: { id: data.id } }"
      style="color: white;">
      Viac informácií
      </RouterLink>
    </div>
    </div>
    
  </template>
  
  <script>
  import { RouterLink } from 'vue-router';
  
  export default {
    components: {
      RouterLink,
    },
  
    props: {
      data: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
<style  scoped>
.tnadpis{
    width: 100%;
    text-align: center;
    background-color: black;
    padding: 15px;
    color: white;
    font-size: 40px;
    border-bottom: 1px solid white;
  }
  .treneri{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: fit-content;
    background-color: black;
  }
  .treneri img{
    width: 15vw;
    height: 23vw;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .trstyle{
    text-align: center;
    color: white;
  }
  .trstyle p{

    margin: 10%;
  }
  @media (max-width: 700px){
    .treneri{
      flex-direction: column;
    }
    .treneri img{
      width: 80%;
      height: auto;
    }
    .tnadpis{
      border-bottom: 3px solid white;
    }
    .tr1, .tr2, .tr3{
      border-bottom: 1px solid white;
    }
  }

</style>
  