<template>
  <section class="formular">
    <form>
        <label for="meno">Meno</label>
        <input type="text" id="meno" name="meno" placeholder="Meno a priezvisko">

        <label for="email">E-mail</label>
        <input type="email" id="email" name="email" placeholder="meno@mail.web">

        <label for="moznost">Typ otázky</label>
        <select name="moznost" id="moznost">
            <option value="Všeobecné">Všeobecné</option>
            <option value="Osobný tréning">Osobný tréning</option>
            <option value="Strava">Strava</option>
            <option value="Fyzioterapia">Fyzioterapia</option>
            <option value="Výzivové doplnky">Výživové doplnky</option>
        </select>

        <label for="vaša otázka">Vaša otázka</label>
        <textarea id="vaša otázka" name="vaša otázka" placeholder="Spýtajte sa nás..." style="height: 150px"></textarea>
<div class="suhlas">
        <label for="OU">Súhlas so spracovaním osobných údajov.</label>
        <input type="checkbox" name="OU" id="OU">
        </div>

        <input type="submit" value="Odoslať" href="thankyou.html">
   
    </form>

</section>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
      <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
</template>

<script>

</script>

<style scoped>
.formular{
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
.formular form{
  padding: 15px;
}
input[type=text], select, textarea{
  width: 100%;
  padding: 12px;
  border: 2px solid black;
  border-radius: 5px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}
input[type=email]{
  width: 100%;
  padding: 12px;
  border: 2px solid black;
  border-radius: 5px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}
input[type=submit]{
  background-color: white;
  color: black;
  padding: 12px 20px;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
}
input[type=submit]:hover{
  background-color: rgb(251, 169, 169);
  border: 3px solid black;
  transition: 0.3s;
}
</style>
