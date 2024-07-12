<template>
  <img src="../assets/logo.png.webp" alt="" class="logo">
  <h1>dddd</h1>
  <div class="register">
    <input type="text" v-model="name" placeholder="name">
    <input type="password" v-model="password" placeholder="password">
    <input type="email" v-model="email" placeholder="email">
    <button v-on:click="submit">Submit</button>
    <router-link to="/login-page">Login</router-link>

  </div>

</template>
<script>
import axios from 'axios';
export default {
  name: "SignUp",
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  
  methods: {
    // POST API
    async submit() {
      try{
   // console.log(this.name,this.email,this.password);
    let data = await axios.post('http://localhost:3000/users', {
        name: this.name, email: this.email, password: this.password
      })
      console.log(data, "result");
      if(data.status==201){
       // Router-Navigation
        this.$router.push({name:'LoginPage'})
      }
      }
      catch(error){
        console.log(error,"error occured during Sign-up");
      }
     
    }

  }
}
</script>

<style >

</style>