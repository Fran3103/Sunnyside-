const btn = document.querySelector('.icono_menu');
const cerrar = document.querySelectorAll('.btn');
const menu = document.querySelector('.menu')
const menuDesk = document.querySelectorAll('.btn-desk')





console.log(cerrar)




btn.addEventListener('click', () => 
abrirMenu (menu))


cerrar.forEach(e => { e.addEventListener('click',()=> cerrarMenu())})


menuDesk.forEach(boton => {
    boton.addEventListener('click', (e) =>{

        menuDesk.forEach(boton=> boton.classList.remove('active'))
        e.currentTarget.classList.add('active')
    })
})










function activa(){

}



function abrirMenu(menu){
    menu.style.display = 'flex';

}

function cerrarMenu(){
    menu.style.display= 'none'
}