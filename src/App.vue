<template>
  <div id="app">
    <reservation-form-old-style></reservation-form-old-style>
  </div>
</template>

<script>
    //import ReservationForm from './components/ReservationForm.vue';
import ReservationFormOldStyle from './components/ReservationFormOldStyle.vue';

export default {
  name: 'app',
  components: {
      //ReservationForm,
      ReservationFormOldStyle
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
