<template>
    <div class="sidebar">
        <div class="sbicons">
          <img src="/fb.png" alt="">
          <img src="/ig.png" alt="">
          <img src="/yt.png" alt="">
        </div>
      </div>
    </template>

    <script>
</script>

<style scoped >
.sidebar{
    width: fit-content;
    height: fit-content;
    display: block;
    background-color: rgb(251, 169, 169);
    position: fixed;
    margin-top: 17%;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border: solid 2px black;
    z-index: 1;
  }
  .sidebar img{
    display: block;
    height: 55px;
    width: 55px;
    padding: 2px;
  }
  .sidebar img:hover{
    width: 60px;
    height: 60px;
    transition: 0.5s;
    background-color: white;
    border-radius: 50px;
    cursor: pointer;
  }
  @media (max-width: 700px){
    .sidebar{
      display: none;
    }
  }
    </style>