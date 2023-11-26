import { getSinglePost } from "./post.js"
import { getPosts } from "./posts.js"

async function loadData(){
    await getPosts()
}

loadData()