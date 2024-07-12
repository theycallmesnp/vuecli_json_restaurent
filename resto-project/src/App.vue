<template>
<!-- <router-view></router-view> -->
 <router-view ></router-view>

<!-- <SignUp /> -->


</template>

<script>

// import SignUp from './components/SignUp.vue'



export default {
  name: 'App',
// components:{
//   SignUp
// }

}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.login  {
  display: flex;
  flex-direction: column;

  align-content: flex-start;
  row-gap: 8px;
  align-items: center;
}
.register  {
  display: flex;
  flex-direction: column;

  align-content: flex-start;
  row-gap: 8px;
  align-items: center;
}
.rest  {
  display: flex;
  flex-direction: column;

  align-content: flex-start;
  row-gap: 8px;
  align-items: center;
}
.login input  {
  width: 20em;
  height: 35px;
  border-radius: 6px;
  padding-left: 12px;

}
 .register input{
  width: 20em;
  height: 35px;
  border-radius: 6px;
  padding-left: 12px;

}
.rest input{
  width: 20em;
  height: 35px;
  border-radius: 6px;
  padding-left: 12px;

}

button {
  width: 123px;
  height: 45px;
  letter-spacing: 7px;
  background-color: skyblue;
  color: black;
  border: none;
  border-radius: 7px;
  font-weight: bolder;
  text-transform: uppercase;
}

</style>
