export default function initSobreMim(){
    const selecaoSobre = document.querySelectorAll('[data-sobre]')
    const dadosSobre = document.querySelectorAll('[data-texto]')
    const imgSobre = document.querySelector('.imagemSobreMim')

    selecaoSobre.forEach((item, index) =>{
        item.addEventListener('click', ()=>{
            mostrarTexto(index)
        })
    })

    function mostrarTexto(index){
        dadosSobre.forEach(item =>{
            item.classList.remove('ativo')
        })
        dadosSobre[index].classList.add('ativo')
        imgSobre.src = `./assets/sobremim/img${index}.png`
    }
}