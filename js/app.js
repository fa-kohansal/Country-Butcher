// set loading page
setTimeout(function (){
    document.querySelector('.loading').style.display="none"
},3000)

setTimeout(function (){
    $('div.social').fadeIn(800).addClass('animate__animated animate__fadeInLeft')
    $('div.cart').fadeIn(800).addClass('animate__animated animate__fadeInRight')
    $('div.logo').fadeIn(800).addClass('animate__animated animate__fadeInDown')
},3000)
$('li').click(()=>{
    $(this).css({
        color:"#e1cda0"
    })
})
setTimeout(()=>{
    $('div.parallax>div.data>h4').addClass("animate__animated animate__fadeInRight")
    $('div.parallax>div.data>h1').addClass("animate__animated animate__fadeInLeft")
    $('div.parallax>div.data>a').addClass("animate__animated animate__fadeInUp")
},3000)


let heritage= document.querySelector('div.dataHeritage')
let showHeritage = async ()=>{
    let response= await fetch("http://localhost:3004/dataHeritage").then((res)=>{
        return res.json()
    })
    let heritageHtml = ""
    response.map((elem)=>{
        heritageHtml+=`
                        <div class="data">
                    <img src="${elem.image}" alt="butcher">
                    <h1>${elem.title}</h1>
                    <p>${elem.description}</p>
                </div>

        `
    })
    heritage.innerHTML=heritageHtml
}
showHeritage()

let shop= document.querySelector('div.shopData')
let shopShow = async()=>{
    let response= await fetch("http://localhost:3004/dataShop").then((res)=>{
        return res.json()
    })
    let shopHtml=""
    response.map((elem)=>{
        shopHtml+=`
                        <div class="data">
                    <img src="${elem.image}" alt="beaf">
                    <h2>${elem.title}</h2>
                    <p> <span>${elem.minPrice}</span> – <span>${elem.maxPrice} </span></p>

                </div>

        `
    })
    shop.innerHTML=shopHtml
}
shopShow()


let slides = document.querySelector(".slider").children;
let n = 0;
function displayNone(){
    for (let i=0; i <slides.length;i++){
        slides[i].style.display ='none';
    }
}
function noActive(){
    for (let i=0; i<slides.length; i++){
        slides[i].classList.remove('active')
    }
}

setInterval(function(){
    n++;
    if (n>slides.length-1){
        n=0;
    }
    displayNone();
    noActive();
    slides[n].style.display ='block';
    slides[n].classList.add('active')

},3000)
