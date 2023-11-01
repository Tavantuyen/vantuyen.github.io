function handle() {
    let btnMenu = document.querySelector(".inconMenu");
    let navElement = document.querySelector(".nav");
    let footerStartElement = document.querySelector(".footer__start");
    let footerInfoElements = document.querySelectorAll(".footer__info");

    let btnNextRightElenemnt=document.querySelector(".btnNextRight");
    let btnNextLeftElenemnt=document.querySelector(".btnNextLeft");
    let sliderImageElement=document.querySelector(".slider__image");
    let imageReplaceElement=document.querySelectorAll(".image__replace");
    if (btnMenu) {
        btnMenu.onclick = function (e) {
            navElement.classList.toggle("show__nav");
        }
    }
    if (footerStartElement) {
        footerStartElement.onclick = function (e) {
            Array.from(footerInfoElements).forEach(function (footerInfoElement) {
                footerInfoElement.classList.toggle("show__footer");
            });

        }
    }
    if(imageReplaceElement)
    {
        let index=0;
        setInterval(function(){
            if(index>=2)
            {
                index=0;
            } 
            sliderImageElement.style.transform=`translateX(-${index*100}%)`;
            index++;
        },2000);
        
        btnNextLeftElenemnt.onclick=function(e)
        {
            if(index>=2)
            {
                index=0;
            }  
            // sliderImageElement.classList.toggle("active"); 
            sliderImageElement.style.transform=`translateX(-${index*100}%)`;
            index++;
        }
        btnNextRightElenemnt.onclick=function(e)
        {
            if(index>=2)
            {
                index=0;
            }  
            // sliderImageElement.classList.toggle("active"); 
            sliderImageElement.style.transform=`translateX(-${index*100}%)`;
            index++;
        }


    }
}
handle();