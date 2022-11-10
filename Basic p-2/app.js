const app = Vue.createApp({
  // data, functions, Component Template
  // template: '<h2>I am a Template</h2>'

  data() {
    return {
      url: 'https://yeaminrabbi.techstringit.com/',
      title: 'The Final Template',
      author: 'John Doe',
      age: 40,
      showBooks: true,
      x: 0,
      y: 0,
      books: [{
          title: 'name of the wind',
          author: 'Jone Doe',
          img: 'assets/1.jpg',
          isFav: true
        },
        {
          title: 'the way of kings',
          author: 'brandon sanderson',
          img: 'assets/2.jpg',
          isFav: true
        },
        {
          title: 'the final empire',
          author: 'jellyfish',
          img: 'assets/3.jpg',
          isFav: false
        }

      ],
      ebooks: [{
        title: 'name of the wind',
        author: 'Jone Doe',
        img: 'assets/1.jpg',
        isFav: true
      },
      {
        title: 'the way of kings',
        author: 'brandon sanderson',
        img: 'assets/2.jpg',
        isFav: true
      },
      {
        title: 'the final empire',
        author: 'jellyfish',
        img: 'assets/3.jpg',
        isFav: false
      }

    ]
    }
  },
  methods: {
    changeTitle(str) {
      // console.log('you clicked me')
      // this.title = 'Words of Randiance'
      this.title = str
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    },
    handleEvent(e, data) {
      console.log(e, (data ?? ''))
    },
    handleMousemove(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    },

    toggleFav(book) {
      book.isFav = !book.isFav
    }
  },

  computed: {
    filteredBooks() {
      // return 'hello'
      return this.books.filter((book)=> book.isFav)

    }
  }

})

app.mount('#app')