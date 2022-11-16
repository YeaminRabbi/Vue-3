<template>
  <h1>{{ title }}</h1><br>
  
  <!-- <div>
    <input type="text" name="name" refs="name">
    <button @click="handleClick">Click me</button>
  </div> -->

  <teleport to=".modals" v-if="showModal">
    <!-- <Modal :header="header" :text="text" theme="sale" @close="toggleModal"></Modal> -->
    <Modal  theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">Sign up now</a>
        <a href="#">More info</a>
      </template>   
      
      <h1>Ninja Turtle</h1>
      <p>Grab your ninja swag for half price!</p>

    </Modal>
  </teleport>


  <teleport to=".modals" v-if="showModalTwo">
    <!-- <Modal :header="header" :text="text" theme="sale" @close="toggleModal"></Modal> -->
    <Modal  @close="toggleModalTwo">
      <h1>Sign up tp the newsletter</h1>
      <p>For updates and promo codes</p>
    </Modal>
  </teleport>


  <button @click.alt="toggleModal">Toggle Modal (alt)</button>
  <button @click="toggleModalTwo">Toggle Modal</button>
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
      showModalTwo: false,
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
    },
    toggleModalTwo(){
      this.showModalTwo =!this.showModalTwo
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
