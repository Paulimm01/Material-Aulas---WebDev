// Dados de exemplo dos posts
let posts = [
    {
        text: "Este é o primeiro post",
        category: "Notícias",
        image: "https://placedog.net/150?random=1",
        date: "12/10/2021 12:00:00"
    },
    {
        text: "Este é o segundo post",
        category: "Dicas",
        image: "https://placedog.net/150?random=2",
        date: "12/10/2022 12:00:00"
    },
    {
        text: "Este é o terceiro post teste",
        category: "Eventos",
        date: "12/10/2023 12:00:00"
    }
];


window.onload = function(){
    mostrarPosts();

    document.querySelector("#postForm").addEventListener("submit", addPost)
}


//CREATE
function addPost(infosDoEvento){
    infosDoEvento.preventDefault();

    const textPost = document.querySelector("#postText").value;
    const categoriaPost = document.querySelector("#postCategory").value;
    const imagemPost = document.querySelector("#postImage").value;

    const novoPost = {
        text: textPost,
        category: categoriaPost,
        image: imagemPost,
        date: new Date().toLocaleString()
    }

    posts.unshift(novoPost)

    mostrarPosts()
}
//READ
function mostrarPosts(){
    const listaPosts = document.querySelector("#postList")
    listaPosts.innerHTML = ""

    posts.forEach( pegaItem => {
        const cardPost = document.createElement("div")
        cardPost.classList.add("card")

        cardPost.innerHTML = `
            <h2>${pegaItem.text}</h2>
            <img src = "${pegaItem.image}"/>
            <p>Categoria: ${pegaItem.category}</p>
        `

        listaPosts.append(cardPost)
    })
}
//UPTADE
function editarPosts(){}
//DELETE
function deletarPosts(){}