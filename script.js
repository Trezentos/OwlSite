const nav = document.querySelector('#nav')
const burger = document.querySelector("#nav .burger")
const navLink = document.querySelector('#nav .nav-links')
const navLinkli = document.querySelectorAll('#nav .nav-links li a')

const owlSiteLogo = document.querySelector('#nav a')
const spanOwlSitelogo = document.querySelector('#nav .logo a span')
const span2OwlSitelogo = document.querySelector('#nav .logo a span:nth-child(2)')


document.addEventListener('scroll', ()=>{
    let scroll = window.scrollY;

        if(scroll>450 ){  
            nav.style.backgroundColor = "#181818"
            owlSiteLogo.style.color = "white"
            span2OwlSitelogo.style.color = spanOwlSitelogo.style.color = 'rgb(173, 141, 80)'
                  
        }else{
            nav.style.backgroundColor = "transparent"
            spanOwlSitelogo.style.color = owlSiteLogo.style.color = span2OwlSitelogo.style.color = "transparent"
        }
})

burger.addEventListener('click', ()=>{
    
    navLink.classList.toggle('nav-links-active')

})

navLinkli.forEach((item)=>{

    item.addEventListener('click', ()=>{
        navLink.classList.remove('nav-links-active')
    })

})




