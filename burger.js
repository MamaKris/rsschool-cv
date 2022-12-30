document.querySelector('.burger-btn').addEventListener('click', function(){
    document.querySelector('.burger-btn').classList.toggle('burger-btn_active');
    document.querySelector('.burger-menu_list').classList.toggle('burger-menu_list-active');
    document.querySelector('html').classList.toggle('noscroll')
  })

 const closeMenu = () => {
    document.querySelector('.burger-btn').classList.remove('burger-btn_active');
    document.querySelector('.burger-menu_list').classList.remove('burger-menu_list-active');
    document.querySelector('html').classList.remove('noscroll') ;
  }


  document.querySelector('.burger__link').onclick = closeMenu;
  document.querySelector('.burger-2').onclick = closeMenu;
  document.querySelector('.burger-3').onclick = closeMenu;
  document.querySelector('.burger-4').onclick = closeMenu;
  document.querySelector('.burger-5').onclick = closeMenu;
  document.querySelector('.burger-6').onclick = closeMenu;
  document.querySelector('.burger-7').onclick = closeMenu;
  document.querySelector('.burger-8').onclick = closeMenu;
  