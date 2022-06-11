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

// end dropdown

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

