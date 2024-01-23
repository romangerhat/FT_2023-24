<template>
  <div>
    <header>
      <Nav />
    </header>
    
    <Sidebar/>
    
    <RouterView/>

    <footer>
      <Foot />
      <Copyright />
    </footer>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';
import Foot from './components/Foot.vue';
import Copyright from './components/Copyright.vue';
import Sidebar from './components/Sidebar.vue';

export default {
  components: {
    Nav,
    Foot,
    Copyright,
    Sidebar,
  },
};
</script>

<style scoped></style>
