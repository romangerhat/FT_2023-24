<template>
    <div class="detail">
      <div v-if="trener" class="tr1">
        <div class="trstyle">
          <img :src="'../../public/' + trener.image" :alt="trener.meno" />
          <h2>{{ trener.meno }}</h2>
          <p>{{ trener.popis }}</p>
          <p>{{ trener.uspech }}</p>
          <button @click="$router.back()">Domov</button>
        </div>
      </div>
      <div v-else>
        Načítava sa...
      </div>
    </div>
  </template>
  
  <script>
  import { pristupDoTrenerov } from '../stores/treneri';
  
  export default {
    data() {
      return {
        trener: null,
      };
    },
    mounted() {
      const store = pristupDoTrenerov();
      const id = parseInt(this.$route.params.id, 10);
      this.trener = store.data.find(p => p.id === id);
      console.log(this.trener);
    },
  };
  </script>
  
  <style scoped>
  .detail {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: black;
    color: white;
  }
  
  .tr1 {
    width: 50%;
    text-align: center;
  }
  
  .trstyle {
    margin-top: 20px; 
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  .v-else {
    text-align: center;
  }
  </style>