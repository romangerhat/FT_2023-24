<template>
  <div>
    <div class="wrapper">
      <Item v-for="obrazok in obrazky" :key="obrazok.id" :data="obrazok" />
    </div>
  </div>
</template>

<script>
import Item from '@/components/Item.vue';
import { pristupDoObrazkov } from "../stores/obrazky";

export default {
  components: {
    Item,
  },
  data() {
    return {
      obrazky: [],
    };
  },
  mounted() {
    const { data } = pristupDoObrazkov();
    this.obrazky = data;
  },
};

</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 16px; 
  justify-content: center;
  align-items: center;
  justify-items: center; 
}
</style>
