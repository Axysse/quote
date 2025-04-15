const quotesHisto = [
    { text : "'Tuez les! Mais tuez les tous! Qu'il n'en reste pas un pour me le reprocher!'<br>-Charles IX, un homme formidable.", img: "./assets/img/charles9.jpg" },
    { text : "'Qu'ils chantent, pourvu qu'ils paient.'<br>-Mazarin, homme d'état (trop) moderne.", img: "./assets/img/mazarin.jpg" },
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
   let result = getRandomId(quotesHisto)
    textContainer.innerHTML = quotesHisto[result].text
    image.src = quotesHisto[result].img
    displayImg.appendChild(image)
    displayText.appendChild(textContainer);
    image.classList.add("img-w")
    image.classList.add("h-158")
})