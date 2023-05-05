//Variables
const phrasesList = [
  'Desafios nos tornam mais fortes e resilientes, não desista!',
  'As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o efeito do banho, por isso recomenda-se diariamente.',
  'É costume de um tolo, quando erra, queixar-se dos outros. É costume de um sábio queixar-se de si mesmo.',
  'A verdadeira motivação vem de realização, desenvolvimento pessoal, satisfação no trabalho e reconhecimento.',
  'O sucesso não tem a ver com quanto dinheiro você ganha, mas com a diferença que você faz na vida de outras pessoas.',
  'Tente de novo. Fracasse de novo. Mas fracasse melhor.',
  'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.',
  'Acredite em milagres, mas não dependa deles.',
  'Não existe nada de completamente errado no mundo, mesmo um relógio parado, consegue estar certo duas vezes por dia.',
]

const fortuneCookie = document.querySelector('#fortune-cookie')
const backBtn = document.querySelector('#backBtn')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const message = document.querySelector('#message')

let phrases = phrasesList[Math.floor(Math.random()*phrasesList.length)]

//Functions
function handleClick () {
  toggleScreen()
  screen2.querySelector('#message').innerText = `${phrases}`
}

function toggleScreen () {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function backClick () {
  toggleScreen()
  phrases = phrasesList[Math.floor(Math.random()*phrasesList.length)]
}

//Events
fortuneCookie.addEventListener('click', handleClick)
backBtn.addEventListener('click', backClick)