<template>
    <div class="formular">
      <form @submit.prevent="vypocitajBMI">
        <label for="weight">Váha (kg):</label>
        <input class="input-field" type="number" id="weight" v-model="weight" required />
  
        <label for="height">Výška (cm):</label>
        <input class="input-field" type="number" id="height" v-model="height" required />
  
        <button class="input-field-submit" type="submit">Vypočítať BMI</button>
      </form>
  
        <p>{{ vys }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        weight: null,
        height: null,
        vys: null,
      };
    },
    mounted() {
      const savedData = JSON.parse(localStorage.getItem("bmiData"));
      if (savedData) {
        this.weight = savedData.weight;
        this.height = savedData.height;
      }
    },
    methods: {
      vypocitajBMI() {
        if (this.weight && this.height) {
          const vahaKG = parseFloat(this.weight);
          const vyskaCM = parseFloat(this.height);
  
          const vyskaM = vyskaCM / 100;
  
          const bmi = vahaKG / (vyskaM * vyskaM);
  
          this.vys = `Tvoje BMI je ${bmi.toFixed(2)}`;
  
          localStorage.setItem("bmiData", JSON.stringify({ weight: this.weight, height: this.height }));
        } else {
          this.vys = null;
        }
      },
    },
  };
  </script>
  
  
  <style scoped>
  .formular {
    width: 80%;
    background-color: rgb(219, 219, 219);
    position: absolute;
    display: block;
    margin-top: 100px;
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 100px;
    height: fit-content;
    border: 1px solid #222;
    border-radius: 5px;
    z-index: 1;
  }
  
  .formular form {
    padding: 15px;
  }
  
  .input-field {
    width: 100%;
    padding: 12px;
    border: 2px solid black;
    border-radius: 5px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
  }
  
  .input-field-submit {
    background-color: white;
    color: black;
    padding: 12px 20px;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 15px;
  }
  
  .input-field-submit:hover {
    background-color: rgb(251, 169, 169);
    border: 3px solid black;
    transition: 0.3s;
  }
  </style>
  