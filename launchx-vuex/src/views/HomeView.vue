<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <Contador/>

    <Cuadrado/>

    <Botones/>
    
  </div>
</template>

<script>
import Contador from "../components/contador.vue"
import Cuadrado from "../components/cuadrado.vue"
import Botones from "../components/botones.vue"
export default {
  name: 'HomeView',
  components:{
    Contador,
    Cuadrado,
    Botones
  }
}
</script>

<style>
  div{
    margin-bottom: 10px;
  }
  .contador{
    font-size: 90px;
  }
  .buttons button{
    font-size:40px;
    width: 200px;
    margin: 0 10px;
    
  }
  .cuadrado{
    font-size: 25px;
  }
</style>