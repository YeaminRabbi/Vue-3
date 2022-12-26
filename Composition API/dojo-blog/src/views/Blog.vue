<template>
  <div class="home">
      <h1>Blog</h1>
      <div v-if="error">{{ error }}</div>
      <div v-if="posts.length">
        <post-list 
        :posts="posts"
        ></post-list>
      </div>
      <div v-else>
          loading...
      </div>

      <!-- <button @click="showPosts = !showPosts" >Toggle Posts</button>
      <button @click="posts.pop()" >Delete Post</button> -->
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import getPosts from '../composibles/getPosts.js'
export default {
  components: { PostList },
  name: 'Blog',
  setup(){
    
   const {posts,error,load} =  getPosts()

   load()

    return {
      posts,   error
    }


  },
  data(){
    return {

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
