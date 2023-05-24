const startButtion = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const imageQst = document.getElementById('image')


let shuffledQuestions, currentQuestionIndex



startButtion.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('Started')
    startButtion.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    changeImage(question.img)
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function changeImage(img) {
    document.getElementById('image').src = img
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButtion.innerText = 'Restart'
        startButtion.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [

    {
        question: 'Quelle nourriture représente cette image',
        img: "image/Image1.png",
        answers: [
            { text: 'Baguette', correct: false },
            { text: 'Datte', correct: false},
            { text: 'Croissant', correct: true },
            { text: 'Beure', correct: false}
        ]
    },

    {
        question: 'Quelle nourriture représente cette image',
        img: "image/Image2.png",
        answers: [
            { text: 'Steak', correct: true },
            { text: 'Oignon', correct: false},
            { text: 'Lait', correct: false },
            { text: 'Frite', correct: false}
        ]
    },

    {
        question: 'Quelle nourriture représente cette image',
        img: "image/Image3.png",
        answers: [
            { text: 'Courgette', correct: false },
            { text: 'Yaourt', correct: false},
            { text: 'Cornichon', correct: false },
            { text: 'Carotte', correct: true}
        ]
    },

{
    question: 'Quelle nourriture représente cette image',
    img: "image/Image4.jpg",
    answers: [
        { text: 'Riz', correct: true },
        { text: 'Crème', correct: false},
        { text: 'Chocolat', correct: false },
        { text: 'Patate', correct: false}
    ]
},
 //ajoute des qsts ici
 {
    question: 'Quelle nourriture représente cette image',
    img: "image/pomme.img.png",
    answers: [
        { text: 'Banane', correct: false },
        { text: 'Kiwi', correct: false},
        { text: 'Pomme', correct: true },
        { text: 'Poire', correct: false}
    ]
},

{
    question: 'Quelle nourriture représente cette image',
    img: "image/Image5.jpg",
    answers: [
        { text: 'Lait', correct: false },
        { text: 'Glace', correct: false},
        { text: 'Café', correct: true },
        { text: 'Patate', correct: false}
    ]
},

{
    question: 'Quelle nourriture représente cette image',
    img: "image/Image6.png",
    answers: [
        { text: 'Salade', correct: false },
        { text: 'Abricots', correct: false},
        { text: 'Cornichon', correct: false },
        { text: 'Tomate', correct: true}
    ]
},

{
    question: 'Quelle nourriture représente cette image',
    img: "image/Image7.png",
    answers: [
        { text: 'Banane', correct: true },
        { text: 'Fraise', correct: false},
        { text: 'Prune', correct: false },
        { text: 'Carotte', correct: false}
    ]
},
{
    question: 'Quelle nourriture représente cette image',
    img: "image/Image8.png",
    answers: [
        { text: 'Riz', correct: false },
        { text: 'Comcombre', correct: false},
        { text: 'Frite', correct: true },
        { text: 'Tomate', correct: false}
    ]
},

{
    question: 'Quelle nourriture représente cette image',
    img: "image/Image9.jpg",
    answers: [
        { text: 'Poisson', correct: false },
        { text: 'Olive', correct: true},
        { text: 'Orange', correct: false },
        { text: 'Viande', correct: false}
    ]
},

{
    question: 'Quelle nourriture représente cette image',
    img: "image/Image10.png",
    answers: [
        { text: 'Oignon', correct: true },
        { text: 'Salade', correct: false},
        { text: 'Persil', correct: false },
        { text: 'Olive', correct: false}
    ]
},

{
    question: 'Quelle nourriture représente cette image',
    img: "image/Image11.jpg",
    answers: [
        { text: 'Poire', correct: false },
        { text: 'Pèche', correct: false},
        { text: 'Fraise', correct: true },
        { text: 'Melon', correct: false}
    ]
},

{
    question: 'Quelle nourriture représente cette image',
    img: "image/Image12.jpg",
    answers: [
        { text: 'Orange', correct: true },
        { text: 'Citron', correct: false},
        { text: 'Lait', correct: false },
        { text: 'oeuf', correct: false}
    ]
},

{
    question: 'Quelle nourriture représente cette image',
    img: "image/Image13.jpg",
    answers: [
        { text: 'poivron', correct: false },
        { text: 'mangue', correct: true},
        { text: 'jus', correct: false },
        { text: 'banane', correct: false}
    ]
},

{
    question: 'Quelle nourriture représente cette image',
    img: "image/Image14.jpg",
    answers: [
        { text: 'Lait', correct: false },
        { text: 'Pain', correct: false},
        { text: 'Beurre', correct: false },
        { text: 'Chocolat', correct: true}
    ]
},

{
    question: 'Quelle nourriture représente cette image',
    img: "image/Image15.jpg",
    answers: [
        { text: 'Citron', correct: false },
        { text: 'Pastèque', correct: true},
        { text: 'Goyave', correct: false },
        { text: 'Pomme', correct: false}
    ]
},

]