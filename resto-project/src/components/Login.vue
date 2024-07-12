<template>
<h1>Login</h1>

<div class="login">
    <input  type="email" v-model="email" placeholder="enter email">
    <input  type="password" v-model="password" placeholder="enter password">
    <!-- <input  type="email" placeholder="enter email"> -->
    <button v-on:click="submit">Submit</button>
    <router-link to="/Sign-up">SignUp</router-link>
</div>
</template>
<script>

import axios from 'axios';
export default{
    name:'LoginPage',
    data(){
        return{
email:'',
password:''
        }
    },
    methods:{
         async submit(){
            try{
                let result =  await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)
                let data= result.data;
                console.log(result);
                console.log(data);
                if(result.status===200 && data.length===1){
                    localStorage.setItem("user-Login", JSON.stringify(data[0]));
                    this.$router.push({name:'HomePage'})
                }
                 else{
                    this.$router.push({name:'SignUp'});
                    alert("Sign-Up first")
                 }
            }
            catch(err){
                console.log("error during login",err);
            }
         }
    }
}
</script>
<style >

</style>
