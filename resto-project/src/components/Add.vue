<template>
    <h1>Add Restaurant List</h1>
    <div class="rest">
        <input type="text" placeholder="Restaurant name" v-model="name">
        <input type="text" placeholder="Address" v-model="address">
        <input type="number" placeholder="Number" v-model="Number">
     <button v-on:click="submit"> Submit</button>
    </div>
</template>
<script>
import axios from 'axios';
export default{
    name:'AddPage',
    data(){
        return{
            name:'',
            address:'',
            Number:''
        }
    },
    methods:{
async submit(){
  try{
    let result = await axios.post("http://localhost:3000/restaurants",{
        name:this.name,addres:this.address,contact:this.Number
    })
    console.log(result);
  
    if(result.status==201 ){
        this.$router.push({name:'HomePage'});
        alert("Data-posted")
    }
  }
  catch(error){
    console.log(error,"error occured during posting rest data");
  }
    
    
}
    }
}
</script>
<style>

</style>
