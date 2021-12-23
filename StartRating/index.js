const allStars = document.querySelectorAll("i")
const lengthFull = allStars.length
const mainDiv = document.querySelector("#display-star")
let selectedStar = 0
console.log(allStars.length)

mainDiv.addEventListener("mouseleave",() => mainDivLeave())

allStars.forEach(element => {
    return element.addEventListener("mouseover", (e) => onHover(e))
});

allStars.forEach(element => {
    return element.addEventListener("mouseleave", (e) => onHoverLeave(e))
});

allStars.forEach(element => {
    return element.addEventListener("click", (e) => setSelectedStar(e))
});

const setSelectedStar = (val) => {
    const curStar = parseInt(val.srcElement.id.split("-")[1][0])
    selectedStar = curStar+1
    document.querySelector("#rating").innerHTML = `<p> ${selectedStar} </p>`
}

const onHover = (val) => {
    const curStar = parseInt(val.srcElement.id.split("-")[1][0])
    for(let i=0; i<=curStar; i++) {
        allStars[i].classList.remove("fa-star-o")
        allStars[i].classList.add("fa-star")
    }
}

const onHoverLeave = (val) => {
    const curStar = parseInt(val.srcElement.id.split("-")[1][0])
    allStars[curStar].classList.remove("fa-star")
    allStars[curStar].classList.add("fa-star-o")
    
}

const mainDivLeave = () => {
    console.log("in",allStars.length - selectedStar,selectedStar)
    for(let i=0; i < selectedStar; i++) {
        console.log(">>>>")
        allStars[i].classList.remove("fa-star-o")
        allStars[i].classList.add("fa-star")
    }
}