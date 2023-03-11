



const projectCards = document.querySelectorAll('.card')
console.log(projectCards)

function cardReset() {
    projectCards.forEach((card) => {
        if (card.classList.contains('activeCard')) {
            card.classList.remove('activeCard');
        }
    })
}

projectCards.forEach(function (card) {
    card.addEventListener('click', function () {
        cardReset();
        card.classList.toggle('activeCard');
    })
})

