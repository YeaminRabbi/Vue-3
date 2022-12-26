import { ref } from '@vue/reactivity'
const getPosts = () =>{
    const error = ref(null)
    const posts = ref([])

    const load = async () => {
      try{
        let data = await fetch('http://localhost:3000/posts')
        // console.log(data)

        if(!data.ok){
          throw Error('no data available')
        }

        posts.value = await data.json()

      }
      catch(err){
        error.value = err.message
        console.log(error.value)
      }
    }


    return {posts,error , load}
}

export default getPosts