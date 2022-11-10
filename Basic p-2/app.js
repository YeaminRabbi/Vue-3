const app = Vue.createApp({
    // data, functions, Component Template
    // template: '<h2>I am a Template</h2>'

    data() {
        return {
            title: 'The Final Template',
            author: 'John Doe',
            age: 40,
            showBooks: true
        }
    },
    methods: {
      changeTitle(str){
        // console.log('you clicked me')
        // this.title = 'Words of Randiance'
        this.title = str
      }  ,
      toggleShowBooks(){
        this.showBooks = !this.showBooks
      }
    },
    
})

app.mount('#app')