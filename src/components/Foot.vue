<template>
    <footer>
        <div class="foot1">
          <h1>Sledujte nás</h1>
          <img src="/fb.png" alt=""> 
          <img src="/ig.png" alt="">
          <img src="/yt.png" alt="">
        
        </div>
        <div class="foot2">
          <h1>Kde nás nájdete</h1>
          <br>
         <ul class="lokacia">
          <li>GYM-X</li>
          <li>Ulica fiktívna 5</li>
          <li>000 00 Fiktívne mesto</li>
         </ul>
        
        </div>
        <div class="foot3">
          <h1>Kontaktujte nás</h1>
          <br>
          <ul class="lokacia">
            <li>0123 456 789</li>
            <li>gym-x@mail.url</li>
            <li>gym-x P.O. Box adresa</li>
           </ul>
        </div>
      </footer>
</template>
  
<script>

</script>
  
<style scoped>
footer{
    left: 0;
    
    width: 100%;
    background-color: black;
    color: white;
    text-align: center;
    height: fit-content;
    display: flex;
  }
  @media (max-width: 700px) {
    footer{
      flex-direction: column;
      
    }

  }
  .foot1{
   flex: 33%;
   border-right: 1px solid  rgb(251, 169, 169) ;
  }
  .foot2{
    flex: 33%;
    border-right: 1px solid  rgb(251, 169, 169) ;
   }
   .foot3{
    flex: 33%;
   }
footer h1{
  font-weight: 500;
  font-size: 25px;
  padding: 10px;
  border-bottom: solid 1px  rgb(251, 169, 169)  ;
  border-top: solid 3px rgb(251, 169, 169);
}
.foot1 img{
  width: 48px;
  height: 48px;
  background-color: white;
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 0;
  margin-left: 45%;
  border-radius: 90px;
  opacity: 70%;
}
.foot1 img:hover{
  background-color: white;
  width: 60px;
  height: 60px;
  transition: 0.5s;
  opacity: 100%;
  background-color: rgb(251, 169, 169);
  cursor: pointer;
}
.lokacia li{
  list-style: none;
  margin: 20px;
  font-size: 20px;
  font-weight: 200;
  text-align: center;
  opacity: 85%;
}
.lokacia li{
  text-decoration: none;
  color: white;
}
.lokacia li a:hover{
  color: rgb(251, 169, 169);
  font-size: 21px;
  transition: 0.1s;
}
</style>
  