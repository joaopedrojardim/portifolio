export default function initHome(){
    const menuButton = document.querySelector('#menuButton')
    const navMenu = document.querySelector('.navegacao')
    const nav = document.querySelector('.container-fluid')
    const tecnologias = document.querySelectorAll('[data-icon]')

    tecnologias.forEach((item, index) =>{
        item.addEventListener('mouseover', () =>{
            colorirIcone(index)
        })
    })

    tecnologias.forEach((item, index) =>{
        item.addEventListener('mouseout', () =>{
            apagarIcone(index)
        })
    })

    function apagarIcone(index){
        tecnologias[index].classList.remove('colored')
    }

    function colorirIcone(index){
        tecnologias[index].classList.add('colored')
    }


    menuButton.addEventListener('click', ativarMenu)

    function ativarMenu(){
        navMenu.classList.toggle('ativo')
        menuButton.classList.toggle('ativo')

    }

    document.addEventListener('scroll', verificarScroll)

    function verificarScroll(){
        if(!window.pageYOffset){
            nav.classList.add('inativo')
        }else{
            nav.classList.remove('inativo')
        }
    }


}
