export default function initCriarCertificados(){
    const certificados = document.querySelector(".certificados")

    fetch("../certificados.json").then(r => r.json()).then(body =>{
        body.forEach(item =>{
            criarCertificado(item.curso, item.emissor, item.conclusao, item.carga, item.tipo)
        })
    })

    function criarCertificado(titulo, emissor, conclusao, carga, tipo){
        const certificado = document.createElement('div')
        certificado.classList.add('certificado')
        const divTitulo = document.createElement('div')

        /* cor no certificado */
        
        /*
        const tipoCurso = document.createElement('div')
        if(tipo == "JavaScript") tipoCurso.style.background = 'linear-gradient(0deg, rgba(243,252,16,1) 0%, rgba(247,157,0,1) 100%)'
        else if (tipo == "CSS") tipoCurso.style.background = 'linear-gradient(0deg, rgba(0,14,255,1) 0%, rgba(0,31,96,1) 100%)'
        else if (tipo == "UI") tipoCurso.style.background = 'linear-gradient(0deg, rgba(54,2,157,1) 0%, rgba(145,0,255,1) 100%)'
        */

        const tituloh4 = document.createElement('h4')
        const cargaSpan = document.createElement('span')
        const emissorSpan = document.createElement('span')
        const conclusaoSpan = document.createElement('span')


        tituloh4.innerText = titulo
        cargaSpan.innerText = `Carga: ${carga}h`
        emissorSpan.innerText = emissor
        conclusaoSpan.innerText = `Data de Conclusão: ${conclusao}`

        divTitulo.appendChild(tituloh4)
        /* divTitulo.appendChild(tipoCurso)  cor no certificado*/


        certificado.appendChild(divTitulo)
        certificado.appendChild(emissorSpan)
        certificado.appendChild(cargaSpan)
        /* certificado.appendChild(this.conclusao) */
        certificados.appendChild(certificado)
    }
}
