<template>
  <h1>{{ title }}</h1><br>
  
  <!-- <div>
    <input type="text" name="name" refs="name">
    <button @click="handleClick">Click me</button>
  </div> -->

  <div v-if="showModal">
    <Modal :header="header" :text="text" theme="sale" @close="toggleModal"></Modal>
  </div>
  <button @click.alt="toggleModal">Toggle Modal (alt)</button>
</template>

<script>
import Modal from './components/Modal'

export default {
  name: 'App',
  components:{
    Modal,
  },
  data(){
    return{
      title: 'My First Vue Code',
      header: "Sign up for giveaway",
      text: 'Grab your ninga swag for half price!',
      showModal: false,
    }
  },
  methods: {
    handleClick(){
      console.log(this.$refs.name.value)
      this.$refs.name.classList.add('active')
      this.$regs.name.focus()

    },
    toggleModal(){
      this.showModal =!this.showModal
    }
  }
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

h1{
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
