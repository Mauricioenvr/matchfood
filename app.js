

const cardArray = [
    {
        name: 'popcorn',
        img: 'images/popcorn.png',
    },
    {
        name: 'cake',
        img: 'images/cake.png',
    },
    {
        name: 'lemon',
        img: 'images/lemon.png',
    },
    {
        name: 'pumpkin',
        img: 'images/pumpkin.png',
    },
    {
        name: 'icecream',
        img: 'images/icecream.png',
    },
    {
        name: 'chocolate',
        img: 'images/chocolate.png',
    },

    {
        name: 'cookie',
        img: 'images/cookie.png',
    },

    {
        name: 'donnut',
        img: 'images/donnut.png',
    },
    {
        name: 'popcorn',
        img: 'images/popcorn.png',
    },
    {
        name: 'cake',
        img: 'images/cake.png',
    },
    {
        name: 'lemon',
        img: 'images/lemon.png',
    },
    {
        name: 'pumpkin',
        img: 'images/pumpkin.png',
    },
    {
        name: 'icecream',
        img: 'images/icecream.png',
    },

    {
        name: 'chocolate',
        img: 'images/chocolate.png',
    },

    {
        name: 'cookie',
        img: 'images/cookie.png',
    },

    {
        name: 'donnut',
        img: 'images/donnut.png',
    },
]


cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay =document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []
var audio = new Audio('win.mp3');

function createBoard ()
{
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img') 
        card.setAttribute('src', 'images/blank.png')  
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card) 
        console.log(card, i)     
    }
}

createBoard()

const refreshButton = document.querySelector('.refresh-button');

const refreshPage = () => {
  location.reload();
}

refreshButton.addEventListener('click', refreshPage)

function checkMatch()
{
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log('check for match ')
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('You have clicked the same image')
    }


    else if (cardsChosen[0] == cardsChosen[1]) 
    {
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Try again')
    }
     
     cardsChosen = []
     cardsChosenIds = [ ]
     resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === (cardArray/2)) {
        
        resultDisplay.textContent = 'Congratulations'
        audio.play();
    }
}



        function flipCard()
        {
            console.log(cardArray)
            const cardId = this.getAttribute('data-id')
            cardsChosen.push(cardArray[cardId].name)
            cardsChosenIds.push(cardId)
            console.log(cardsChosen)
            console.log(cardsChosenIds)
            this.setAttribute('src', cardArray[cardId].img)
            if (cardsChosen.length === 2)
            {
                setTimeout(checkMatch, 500)
            }
        }

        