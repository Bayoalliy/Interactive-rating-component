/*const mainContainer = document.querySelector(".container")
const thanksContainer = document.querySelector(".thank-you")
const submitButton = document.getElementById("submit-rating")
const rateAgain = document.getElementById("rate-again")
const ratings = document.querySelectorAll(".btn")
const actualRating = document.getElementById("rating")

submitButton.addEventListener("click", () => {
  mainContainer.style.display = "none"
  thanksContainer.classList.remove("hidden")

  ratings.forEach((rating) => {
    rating.addEventListener("click", () => {
      actualRating.innerHTML = rating.innerHTML
    })
  })
})

rateAgain.addEventListener("click", () => {
  mainContainer.style.display = "block"
  thanksContainer.classList.add("hidden")
})*/




let conatainer = document.getElementById('mains')
let button = document.getElementById('submit')
let thank = document.querySelector('.thanks')
let rating = document.querySelectorAll('.btn')

button.addEventListener('click' , () => {
    conatainer.style.display = "none"
    thank.style.display = 'flex'
})


document.querySelectorAll('.btn').forEach(element => {
    element.addEventListener('click' , () => {
        document.querySelector('#rate').innerHTML = element.innerHTML
    })
});