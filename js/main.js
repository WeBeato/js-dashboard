let burger_menu = document.querySelector('.burger_menu');
let sidebar = document.querySelector('aside');
let bg_cover = document.querySelector('.bg_cover');

burger_menu.addEventListener('click',()=>{
    sidebar.classList.add('d_block')
    bg_cover.classList.add('d_block')
})

bg_cover.addEventListener('click',()=>{
    sidebar.classList.remove('d_block')
    bg_cover.classList.remove('d_block')
})