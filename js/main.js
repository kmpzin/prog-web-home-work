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
})

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
