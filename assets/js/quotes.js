const quotes = [
    { text : "Il faut battre le frère tant qu'il est chauve.", img: "./assets/img/chauve.webp" },
    { text : "-Vous voulez un whiskey?<br>-Non, juste un doigt.<br>-Vous ne voulez pas un whiskey d'abord?", img: "./assets/img/peur.jpg" },
    { text : "Gorben, Gorben, Gorben, Gorben!", img: "./assets/img/gorben.jpg" },
    { text : "Si en Amérique on fait bling-bling, ici, on fait bang-bang.", img: "./assets/img/blood.jpg" },
    { text : "Dis-moi , Joey , est-ce que tu aimes ... les films de gladiateurs ?", img: "./assets/img/pilote.jpg" },
    { text : "-Je veux ta veste, tes bottes et ta moto. <br>-T'as oublié de dire merci.", img: "./assets/img/terminator.jpg" },
    { text : "Tu aimes les omelettes? Tiens, je te casse les oeufs!", img: "./assets/img/last.jpg" },
    { text : "Il y a 9 millions de terroristes dans le monde , j'en tue un et il a les pieds plus petit que ma soeur.", img: "./assets/img/die.jpg" },
    { text : "Petit, tu es doué, très doué ; mais tant que je serai dans le métier, tu ne seras jamais que le second.", img: "./assets/img/mask.jpg" },
    { text : "S'améliorer soi-même c'est de la masturbation. ", img: "./assets/img/fight-club.jpg" },
    { text : "C'est vraiment un gros tas de merde.", img: "./assets/img/ian.jpeg" },
]

const displayText = document.getElementById("displayText")
const displayImg = document.getElementById("displayImg")

const textContainer = document.createElement("p");
let image = document.createElement("img")


function getRandomId(arr){
    let index = Math.floor(Math.random() * arr.length);
    return index
}

document.addEventListener("click", () => { 
   let result = getRandomId(quotes)
    textContainer.innerHTML = quotes[result].text
    image.src = quotes[result].img
    displayImg.appendChild(image)
    displayText.appendChild(textContainer);
    image.classList.add("img-w")
    image.classList.add("h-158")
})