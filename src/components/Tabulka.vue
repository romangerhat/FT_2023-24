<template>
        <div :style="computedStyles" class="tabulka">
            <h1>{{ title }}</h1>
            <table class="hodiny">
              <tr v-for="day in days" :key="day.name">
                <td>{{ day.den }}</td>
                <td>{{ day.hodiny }}</td>
              </tr>
            </table>
          </div>
</template>

<script>
export default {
  props: {
    title: String,
    days: Array,
    customStyles: Object
  },
  computed: {
    computedStyles() {
      return {
        ...this.defaultStyles,
        ...this.customStyles
      };
    },
    defaultStyles() {
      return {
        display: 'flex',
        flexDirection: 'column',
        width: '40%',
        justifyContent: 'center',
        height: 'fit-content',
        backgroundColor: 'whitesmoke',
        border: '5px solid black',
      }
    }
  }
};
</script>

<style scoped>
.tabulka h1{
    text-align: center;
    border-bottom: 2px solid black;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 2.5vw;
  }
  .tabulka{
    border-radius: 10px;
    margin-top: 5%;
    margin-bottom: 5%;
    text-align: center;
  }
  .hodiny{
    font-size: 3vw; 
  }
  .hodiny tr td{
    padding: 10px;
    border-bottom: 1px solid rgb(0, 0, 0);
  }</style>