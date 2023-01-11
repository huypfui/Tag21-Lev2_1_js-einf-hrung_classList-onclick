
const change = document.getElementById("headline")

function changeHeadline() {
    change.classList.add("styleChange")
}

function resetHeadline() {
    change.classList.remove("styleChange")
}

const button = document.getElementById("change-reset")

button.addEventListener("click", function() {
    change.classList.toggle("styleChange")
} )