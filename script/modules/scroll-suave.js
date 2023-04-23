export default function initScrollSuave(){
    const linksInternos = document.querySelectorAll('[href^="#"]')

    linksInternos.forEach(link =>{
        link.addEventListener('click', scrollToSection)
    })
    
    function scrollToSection(event){
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href')
        const section  = document.querySelector(href)
        const topo = section.offsetTop
        
        window.scrollTo({
            top: topo, 
            behavior: 'smooth'
        })
    }
}

