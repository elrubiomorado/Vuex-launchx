<template>
     <div class="buttons">
      <button @click="$store.commit('bajarContador')">-</button>
      <button @click="$store.commit('subirContador')">+</button>
      <button @click="$store.dispatch('subirContadorRandom')">Subir Contador Random</button>
      <button @click="$store.dispatch('bajarContadorRandom')">Bajar Contador Random</button>
    </div>
</template>

<script>
export default {
  name: 'Botones',
    
}
</script>