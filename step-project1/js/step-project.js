const clickContainer = document.querySelector('.our-service-content-menu');
const activeElement = document.querySelectorAll('.osc-menu-list');
const activeText = document.querySelectorAll('.hide');



clickContainer.addEventListener('click', (e) => {
    let cursorTarget = e.target;
    activeElement.forEach((item)=>{
        if(item.classList.contains('osc-menu-list-click')){
            item.classList.remove('osc-menu-list-click');
        }
    });
    cursorTarget.classList.add('osc-menu-list-click');


    if (cursorTarget === document.querySelector('#Web-Design')){
       activeText.forEach((item)=>{
           if(item.classList.contains('show')){
               item.classList.remove('show')
           }
       });
       activeText[0].classList.add('show');
    }
    else if (cursorTarget === document.querySelector('#Graphic-Design')){
        activeText.forEach((item)=>{
            if(item.classList.contains('show')){
                item.classList.remove('show')
            }
        });
        activeText[1].classList.add('show');
    }
    else if (cursorTarget === document.querySelector('#Online-Support')){
        activeText.forEach((item)=>{
            if(item.classList.contains('show')){
                item.classList.remove('show')
            }
        });
        activeText[2].classList.add('show');
    }
    else if (cursorTarget === document.querySelector('#App-Design')){
        activeText.forEach((item)=>{
            if(item.classList.contains('show')){
                item.classList.remove('show')
            }
        });
        activeText[3].classList.add('show');
    }
    else if (cursorTarget === document.querySelector('#Online-Marketing')){
        activeText.forEach((item)=>{
            if(item.classList.contains('show')){
                item.classList.remove('show')
            }
        });
        activeText[4].classList.add('show');
    }
    else {
            activeText.forEach((item)=>{
                if(item.classList.contains('show')){
                    item.classList.remove('show')
                }
            });
            activeText[5].classList.add('show');
    }
})


const clickAmazingContainer = document.querySelector(".amazing-work-content-menu");
const activeAmazingElement = document.querySelectorAll(".oaw-menu-list");
const landingPageItems = document.querySelectorAll('.landing-page');
const allPictures = document.querySelectorAll('.searching-pic');
const arrAllPictures = [...allPictures];
const buttonAmazing = document.querySelector('.amazing-button');

const showAmazingItems = (className) => {
    arrAllPictures.forEach((e)=>{
        e.classList.remove("show-pictures")
    })
    const showPictures = arrAllPictures.filter((i) => {
        return i.classList.contains(className)
    })
    showPictures.forEach((e)=>{
        e.classList.add('show-pictures')
    })
}


clickAmazingContainer.addEventListener('click', (elem) => {
    let cursorTarget = elem.target;
    if (cursorTarget.tagName === 'DIV'){
    activeAmazingElement.forEach((item) =>{
        if(item.classList.contains('oaw-menu-list-active')){
            item.classList.remove('oaw-menu-list-active')
        }
    })
    cursorTarget.classList.add('oaw-menu-list-active');
}
    if(cursorTarget === activeAmazingElement[3]){
        showAmazingItems('landing-page')
        buttonAmazing.classList.add('hide-button');
    //     arrAllPictures.forEach((e)=>{
    //         e.classList.remove("show-pictures")
    //     })
    //     const showPictures = arrAllPictures.filter((i) => {
    //     return i.classList.contains("landing-page")
    //     })
    // showPictures.forEach((e)=>{
    //     e.classList.add('show-pictures')
    // })
}
    else if(cursorTarget === activeAmazingElement[0]) {
        let firstShow = arrAllPictures.slice(0, 12);
        buttonAmazing.classList.remove('hide-button')
        arrAllPictures.forEach((e) => {
            e.classList.remove("show-pictures")
        })

        firstShow.forEach((e) => {
            e.classList.add('show-pictures')
        })
    }
    else if(cursorTarget === activeAmazingElement[1]) {
        showAmazingItems('graphic-design')
        buttonAmazing.classList.add('hide-button');
    }
    else if(cursorTarget === activeAmazingElement[2]) {
        showAmazingItems('web-design')
        buttonAmazing.classList.add('hide-button');
    }
    else if(cursorTarget === activeAmazingElement[4]) {
        showAmazingItems('wordpress')
        buttonAmazing.classList.add('hide-button');
    }
})

buttonAmazing.addEventListener('click', (e) =>{
    let secondShow = arrAllPictures.slice(0, 24);
    arrAllPictures.forEach((e) => {
        e.classList.remove("show-pictures")
    })

    secondShow.forEach((e) => {
        e.classList.add('show-pictures')
        buttonAmazing.classList.add('hide-button');
    })
})
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
