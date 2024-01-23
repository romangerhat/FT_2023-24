<template>
    <header class="header">
        <div class="top-nav">
            <div class="logo">
              GYM-X
            </div>
            <input id="menu-toggle" type="checkbox" />
            <label class='menu-button-container' for="menu-toggle">
            <div class='menu-button'></div>
          </label>
            <ul class="menu">
                <li v-for="link in links" :key="link.path">
                    <router-link :to="link.path" class="link">
                        {{ link.name }}
                    </router-link>
                </li>
            </ul>
          </div>
    </header>
    <div class="medzera"></div>
</template>
  
<script>
export default {
    data() {
        return {
            links: [
                { name: 'Domov', path: '/' },
                { name: 'O nás', path: '/onas' },
                { name: 'Galéria', path: '/galeria' },
                { name: 'Kontakt', path: '/kontakt' },
                { name: 'Kalkulačka', path: '/kalkulacka' }
            ],
        };
    },
};
</script>

<style scoped >
.medzera {
  width: 100%;
  padding: 30px;
}
.logo{
    font-weight: 900;
    font-size: 35px;
  }
  
  .top-nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: black;
    color: rgb(251, 169, 169);
    height: 60px;
    padding: 15px;
    font-size: 25px;
    position: fixed;
    width: 100%;
    z-index: 2;
  }
  .menu li a{
    text-decoration: none;
    color: white;
    display: block;
  }
  .menu li a:hover{
    color: rgb(251, 169, 169) ;
    font-weight: bold;
    font-size: 27px;
    transition: 0.3s;
  }
  .napis{
    border-bottom: 1px solid white;
  }
  .menu {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  .menu  li {
    margin: 0 1rem;
    overflow: hidden;
  }
  
  .menu-button-container {
    display: none;
    height: 100%;
    width: 30px;
    cursor: pointer;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  #menu-toggle {
    display: none;
  }
  
  .menu-button {
    display: block;
    background-color: #fff;
    position: absolute;
    height: 4px;
    width: 30px;
    border-radius: 2px;
  }
  .menu-burger{
    display: block;
    position: absolute;
    height: 4px;
    width: 30px;
    margin-bottom: 5px;
  }

  
  @media (max-width: 700px) {
    .menu-button-container {
      display: flex;
    }
    .menu {
      position: absolute;
      top: 0;
      margin-top: 50px;
      left: 0;
      flex-direction: column;
      width: 100%;
      justify-content: center;
      align-items: center;
    }
    #menu-toggle ~ .menu li {
      height: 0;
      border: 0;
    }
    #menu-toggle:checked ~ .menu li {
      height: 2.5em;
      padding: 0.5em;
      border-bottom: solid 2px black;
    }
    .menu  li {
      display: flex;
      justify-content: center;
      width: 100%;
      color: white;
      background-color: #222;
    }
  }
</style>




  