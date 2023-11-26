import { urls } from "./constant.js"
import { getSinglePost, toggleHidden } from "./post.js"
import { formatDateShort } from "./utils.js"


export async function getPosts(){
    const res = await fetch(urls.post)
    const data = await res.json()

    const { posts } = data 

    posts.forEach(post => {
        createPosts(post)
    })
}

function createPosts(post){

    const { author, content, date, id, tags, title } = post
    const sectionPost = document.querySelector('.posts')

    const postContainer = document.createElement('article')
    postContainer.classList.add('post')

    const linkContainer = document.createElement('a')
    linkContainer.classList.add('post-link')
    linkContainer.setAttribute('data-id', id)

    const headerPost = document.createElement('header')
    headerPost.classList.add('post-header')

    const titlePost = document.createElement('h3')
    titlePost.classList.add('post-title')
    titlePost.textContent = title

    const footerContainer = document.createElement('footer')
    footerContainer.classList.add('post-footer')

    const postContent = document.createElement('p')
    postContent.classList.add('post-content')
    postContent.textContent = content

    const datePost = document.createElement('p')
    datePost.classList.add('post-date')
    datePost.textContent = `${formatDateShort(date)}`

    sectionPost.appendChild(postContainer)
    postContainer.appendChild(linkContainer)
    linkContainer.appendChild(headerPost)
    linkContainer.appendChild(footerContainer)
    headerPost.appendChild(titlePost)
    footerContainer.appendChild(postContent)
    footerContainer.appendChild(datePost)

    postContainer.addEventListener('click', () => {
            
        const spinner = document.querySelector('.loader-container')
        spinner.classList.toggle('hidden')
        setTimeout(() => {
            toggleHidden()
            spinner.classList.toggle('hidden')
        },1000)
        
        getSinglePost(id)
    })
}
