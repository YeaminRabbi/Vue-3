<template>
  <div class="home">
      home
      <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
      <button @click="handleClick" >Click me</button>
      <button @click="age++">Add 1 to age</button>

      <input type="text" v-model="name">
  </div>


  <div class="home">
    <h1>home</h1>
    <h2>Refs</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update ninja one</button>
    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">Update ninja Two</button>
  </div>
  <br> <hr>

  <br>

  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <p>Search Term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      {{ name }}
    </div>

    <button @click = "handleClick2">stop watching</button>
  </div>
</template>

<script>
import { ref, reactive, computed } from '@vue/reactivity'
import { watch, watchEffect } from '@vue/runtime-core'

export default {
  name: 'Home',
  setup(){

    const p = ref(null)

    const name = ref('Jellyfish')
    const age = ref(30)

    const handleClick = () => {
      console.log(p, p.value)

      p.value.classList.add('test')
      name.value = 'luigi'
      age.value= 35
    }



    const ninjaOne = ref({ name: 'jelly', age:30})
    const ninjaTwo = reactive({name: 'luigi', age:35})
    const updateNinjaOne = () => {
        ninjaOne.value.age = 40
    }
    const updateNinjaTwo = () => {
        ninjaTwo.age = 45
    }


    ///----------------------------------------------

    const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koopa', 'peach'])
    const search = ref('')

    const stopWatch = watch(search, () =>{
        console.log('watch function ran')
    })

    const stopEffect = watchEffect(() => {
      console.log('watch function ran')
      
    })

    const handleClick2 = () =>{
      stopWatch()
      stopEffect()
    }
    const matchingNames = computed(() => {
      return names.value.filter((name)=> name.includes(search.value))
    })

    return {
      name,age, handleClick, p , ninjaOne, updateNinjaOne, ninjaTwo, updateNinjaTwo,
      names,search,matchingNames,stopWatch,stopEffect,handleClick2
     }
  },
  data(){
    return {
      score: 5
    }
  },
  created(){
    // console.log('created')

  },
  mounted(){
    // console.log('mounted')
  },
  
}
</script>
