import { createStore } from 'vuex'

export default createStore({
  state: {
    contador:0
  },
  getters: {
    cuadrado(state){
      return state.contador * state.contador;
    }

  },
  mutations: {
    subirContador(state){
      state.contador++;
    },
    bajarContador(state){
      state.contador--;
    },
    subirContadorRandom(state, random){
      state.contador += random;
    },
    bajarContadorRandom(state, random){
      state.contador -= random;
    }
  },
  actions: {
    async subirContadorRandom( {commit} ){
      const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new');
      const results = await res.json();
      console.log(results);
      commit("subirContadorRandom", results)
    },
    async bajarContadorRandom( {commit} ){
      const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new');
      const results = await res.json();
      console.log(results);
      commit("bajarContadorRandom", results)
    }
  },
  modules: {
  }
})
