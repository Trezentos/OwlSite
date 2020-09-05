const navLink = document.querySelector('#nav')
const owlSiteLogo = document.querySelector('#nav a')
const spanOwlSitelogo = document.querySelector('#nav .logo a span')
const span2OwlSitelogo = document.querySelector('#nav .logo a span:nth-child(2)')

document.addEventListener('scroll', ()=>{
    let scroll = window.scrollY;

    if(scroll>450){  
        navLink.style.backgroundColor = "#181818"
        owlSiteLogo.style.color = "white"
        span2OwlSitelogo.style.color = spanOwlSitelogo.style.color = 'rgb(173, 141, 80)'
        
        
        
    }else{
        navLink.style.backgroundColor = "transparent"
        spanOwlSitelogo.style.color = owlSiteLogo.style.color = span2OwlSitelogo.style.color = "transparent"
    }


})