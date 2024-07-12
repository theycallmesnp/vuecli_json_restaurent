<template>
    <h1>Updated Page </h1>
    <div class="rest">
        <input type="text" placeholder="name" v-model="name">
        <input type="text" placeholder="address" v-model="address">
        <input type="Number" placeholder="contact" v-model="contact">
        <button v-on:click="submit">Submit</button>
    </div>
 

</template>
<script>
import axios from 'axios';
export default{
    name:"UpdatePage",
  data(){
    return{
        //step-1
    
          name:'',
          addres:'',
          contact:''

        
        // step-2 
        // restaurant:{
        //     name:'',
        //     address:'',
        //     Number:''
        // }
    }
  },
  async mounted(){
    try{
        let id= this.$route.params.id
 let result = await axios.get(`http://localhost:3000/restaurants/${id}`)
 console.log(result.data);

//  step 1
 this.name=result.data.name,
 this.address=result.data.addres,
 this.contact=result.data.contact

//step2
        //    this.restaurant.name=result.data.name;
           
    }
    catch(err){
        console.log(err);
    }
  },
  methods:{
    
    async submit(){
        try{
            let id= this.$route.params.id
        let result =  await axios.put(`http://localhost:3000/restaurants/${id}`,{
            name:this.name,
            addres:this.address,
            contact:this.contact
        });
        console.log(result);
        alert("updated")
        this.$router.push({'name':'HomePage'})
        }
        catch(err){
            console.log("not able to update",err);
        }
    }
  }
}
</script>
<style >

</style>