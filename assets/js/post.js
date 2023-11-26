import { urls } from "./constant.js"


export function toggleHidden(){

    const detailPost = document.querySelector('.detail-post')
    detailPost.classList.remove('hidden')
    const posts = document.querySelector('.posts')
    posts.classList.add('hidden')

}

function toggleHidden2(){
    
    const detailPost = document.querySelector('.detail-post')
    detailPost.classList.add('hidden')
    const posts = document.querySelector('.posts')
    posts.classList.remove('hidden')

}

export async function getSinglePost(id){

    const res = await fetch(urls[id])
    const data = await res.json()

    createSinglePost(data)

}

function createSinglePost(data){

    const { author, content,title } = data
    
    const h2 = document.querySelector('h2')
    h2.innerHTML = title

    const contentContainer = document.querySelector('.detail-post-content')
    contentContainer.innerHTML = content

    const authorContainer = document.querySelector('.detail-post-author')
    authorContainer.innerHTML = author


    const buttonToggle = document.querySelector('.back-button')
    buttonToggle.addEventListener('click', () => {
        const spinner = document.querySelector('.loader-container')
        spinner.classList.remove('hidden')
        setTimeout(() => {
            spinner.classList.add('hidden')
            toggleHidden2()
        },1000)
        
    })

}