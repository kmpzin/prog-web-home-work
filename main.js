//  dropdown
document.addEventListener('click', (e) => {
  let isDropDownBtn = e.target.classList.contains('dropdown')

  if(!isDropDownBtn && e.target.closest('.navbar_item') != null) return

  let currentSubMenu

  if(isDropDownBtn) {
    let item = e.target.closest('.navbar_item')

    currentSubMenu = item.querySelector('.submenu')

    currentSubMenu.classList.toggle('show')
  }

  document.querySelectorAll('.submenu.show').forEach(submenu => {
    if(submenu == currentSubMenu) return

    submenu.classList.remove('show')
  })
});

// end dropdown

// carousel
  let balls = document.querySelector('.balls')
  let quant = document.querySelectorAll('.slides .carousel-img')
  let atual = 0
  let image = document.getElementById('atual')
  let next = document.getElementById('next')
  let back = document.getElementById('back')
  let rolar = true
  
  for (let i = 0; i < quant.length; i++) {
    let div = document.createElement('div')
    div.id = i
    balls.appendChild(div)
  }
  document.getElementById('0').classList.add('imgAtual')

  let pos = document.querySelectorAll('.balss div')

  for (let i = 0; i < pos.length; i++) {
    pos[i].addEventListener('click', () => { 
      atual = pos[i].id
      rolar = false
      slide()
    })
  }

  back.addEventListener('click', () => {
    atual--
    rolar = false
    slide()
  })
  next.addEventListener('click', () => {
    atual++
    rolar = false
    slide()
  })

  function slide() {
    if (atual >= quant.length){
      atual = 0 
    }
    else if (atual < 0) {
      atual = quant.length-1
    }
    document.querySelector('.imgAtual').classList.remove('.imgAtual')
    image.style.marginLeft = -1024*atual+'px'
    document.getElementById(atual).classList.add('.imgAtual')
  }
  setInterval(() => {
    if(rolar){
      atual++
      slide()
    }
    else {
      rolar = true 
    }
  }, 4000);
// end carousel


// modal
function exit(){
  if(modal.style.display === "block"){
    modal.style.display = "none";
  }else{
    modal.style.display = "block";
  }
}
// end modal



// About me
function Lyssa() {
  lyssa.classList.add('active');
  lyssa.classList.remove('inactive');
  victor.classList.add('inactive');
  victor.classList.remove('active')
  neylson.classList.add('inactive');
  neylson.classList.remove('active');
}

function Neylson() {
  neylson.classList.add('active');
  neylson.classList.remove('inactive');
  victor.classList.add('inactive');
  victor.classList.remove('active')
  lyssa.classList.add('inactive');
  lyssa.classList.remove('active');
}

function Victor() {
  victor.classList.add('active');
  victor.classList.remove('inactive')
  lyssa.classList.add('inactive');
  lyssa.classList.remove('active');
  neylson.classList.add('inactive');
  neylson.classList.remove('active');
}

// end About me

