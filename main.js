//  dropdown
document.addEventListener('click', (e) => {
  const isDropDownBtn = e.target.classList.contains('dropdown')

  if(!isDropDownBtn && e.target.closest('.navbar_item') != null) return

  let currentSubMenu

  if(isDropDownBtn) {
    const item = e.target.closest('.navbar_item')

    currentSubMenu = item.querySelector('.submenu')

    currentSubMenu.classList.toggle('show')
  }

  document.querySelectorAll('.submenu.show').forEach(submenu => {
    if(submenu == currentSubMenu) return

    submenu.classList.remove('show')
  })
});
// END DROPDOWN

// BURGUER
const logo = document.querySelector('.container-burguer')
const menuBurguer = document.querySelector('.menu-burguer')

logo.addEventListener('click', () => {
  menuBurguer.classList.toggle('showmenu')
})
// END BURGUER

// carousel

let balls = document.querySelector('.balls')
let quant = document.querySelectorAll('.slides .images')
let atual = 0
let imagem = document.getElementById('atual')
let next = document.getElementById('next')
let voltar = document.getElementById('voltar')
let rolar = true

for(let i=0; i < quant.length; i++){
  let div = document.createElement('div')
  div.id = i
  balls.appendChild(div)
}
document.getElementById('0').classList.add('imgAtual')

let pos = document.querySelectorAll('.balls div')

for(let i=0; i < pos.length; i++){
  pos[i].addEventListener('click', () => {
    atual = pos[i].id
    rolar = false
    slide()
  })
}

voltar.addEventListener('click', () => {
  atual--
  rolar = false
  slide()
})
next.addEventListener('click', () => {
  atual++
  rolar = false
  slide()
})

function slide(){
  if(atual >= quant.length){
    atual = 0
  }
  else if(atual < 0){
    atual = quant.length-1
  }
  document.querySelector('.imgAtual').classList.remove('imgAtual')
  imagem.style.marginLeft = -1024*atual+'px'
  document.getElementById(atual).classList.add('imgAtual')
}
setInterval(() => {
  if(rolar){
    atual++
    slide()
  }
  else{
    rolar = true 
  }
}, 4000);

// end carousel

// end dropdown

// modal
function exit(){
  if(modal.style.visibility === "visible"){
    modal.style.visibility = "hidden";
  }else{
    modal.style.visibility = "visible";
  }
}
function confirmExit(){
  if(modal.style.visibility === "hidden"){
    modal.style.visibility = "visible";
  }else{
    modal.style.visibility = "hidden";
  }
}
// end modal



// About me
function Lyssa() {
  lyssa.classList.add("aboutme-active");
  lyssa.classList.remove("aboutme-inactive");
  victor.classList.add("aboutme-inactive");
  victor.classList.remove("aboutme-active");
  neylson.classList.add("aboutme-inactive");
  neylson.classList.remove("aboutme-active");
}

function Neylson() {
  neylson.classList.add("aboutme-active");
  neylson.classList.remove("aboutme-inactive");
  victor.classList.add("aboutme-inactive");
  victor.classList.remove("aboutme-active");
  lyssa.classList.add("aboutme-inactive");
  lyssa.classList.remove("aboutme-active");
}

function Victor() {
  victor.classList.add("aboutme-active");
  victor.classList.remove("aboutme-inactive");
  lyssa.classList.add("aboutme-inactive");
  lyssa.classList.remove("aboutme-active");
  neylson.classList.add("aboutme-inactive");
  neylson.classList.remove("aboutme-active");
}

// end About me

