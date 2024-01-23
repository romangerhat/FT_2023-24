<template>
  <div>
    <!---------------------------BANNER  ------------------------------------------>
    <div class="banner">
      <p class="citat">"ITS A SHAME FOR A MAN TO GROW OLD WITHOUT SEEING THE BEAUTY AND STRENGTH OF WHICH HIS BODY IS CAPABLE.
        <p class="autor">-SOCRATES</p>
      </p>
    </div>
    <!---------------------------TRENERI  ------------------------------------------>
    <h1 class="tnadpis">NAŠI TRÉNERI</h1>
    <div class="treneri">
      <div class="karta" v-for="trener in treneri" :key="trener.id">
        <Karta :data="trener" />
      </div>
    </div>
    <!---------------------------TABULKA  ------------------------------------------>
    <div class="tabulky">
      <Tabulka title="OTVÁRACIE HODINY - A" :days="centroA" />
      <Tabulka title="OTVÁRACIE HODINY - B" :days="centroB" :customStyles="{ backgroundColor: 'lightgreen', width: '30%' }" />
    </div>
  </div>
</template>

<script>
import Karta from '@/components/Karta.vue';
import { pristupDoTrenerov } from "../stores/treneri";
import Tabulka from '@/components/Tabulka.vue';

export default {
  components: {
    Karta,
    Tabulka,
  },
  data() {
    return {
      treneri: [],
      centroA: [
        { den: 'Pondelok', hodiny: '5:00 - 22:00' },
        { den: 'Utorok', hodiny: '5:00 - 22:00' },
        { den: 'Streda', hodiny: '5:00 - 22:00' },
        { den: 'Štvrtok', hodiny: '5:00 - 22:00' },
        { den: 'Piatok', hodiny: '5:00 - 22:00' },
        { den: 'Sobota', hodiny: '11:00 - 20:00' },
        { den: 'Nedeľa', hodiny: '11:00 - 20:00' },
      ],
      centroB: [
        { den: 'Monday', hodiny: '7:00 - 23:00' },
        { den: 'Tuesday', hodiny: '7:00 - 23:00' },
        { den: 'Wednesday', hodiny: '7:00 - 23:00' },
        { den: 'Thursday', hodiny: '7:00 - 23:00' },
        { den: 'Friday', hodiny: '7:00 - 23:00' },
        { den: 'Saturday', hodiny: '10:00 - 21:00' },
        { den: 'Sunday', hodiny: '10:00 - 21:00' },
      ],
    };
  },
  mounted() {
    const { data } = pristupDoTrenerov();
    this.treneri = data;
  },
};
</script>

<style scoped>
.tabulky {
  display: flex;
  justify-content: space-around;
}
.uvod {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  flex-direction: column;
}

.banner {
  width: 100%;
  height: 100vh;
  background-image: url(/banner2.jpg);
  display: flexbox;
}
.citat {
  color: rgb(251, 169, 169);
  position: inherit;
  text-align: center;
  padding-top: 30%;
  padding-left: 25%;
  padding-right: 25%;
  font-size: 25px;
  font-weight: 900;
}
.autor {
  text-align: right;
  color: white;
  font-size: 25px;
  padding-left: 30%;
  padding-right: 30%;
  margin-top: 20px;
  font-family: monospace;
}
.tnadpis {
  width: 100%;
  text-align: center;
  background-color: black;
  padding: 15px;
  color: white;
  font-size: 40px;
  border-bottom: 1px solid white;
}
.treneri {
  padding-left: 10%;
  padding-right: 10%;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  background-color: black;
}
</style>
