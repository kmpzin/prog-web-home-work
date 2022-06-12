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

