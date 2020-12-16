const clickContainer = document.querySelector('.our-service-content-menu');
const activeElement = document.querySelectorAll('.osc-menu-list');
const activeText = document.querySelectorAll('.hide');

clickContainer.addEventListener('click', (e) => {
    let cursorTarget = e.target;
    let search = cursorTarget.dataset.name;
    activeElement.forEach((item) => {
        if (item.classList.contains('osc-menu-list-click')) {
            item.classList.remove('osc-menu-list-click');
        }
    });
    cursorTarget.classList.add('osc-menu-list-click');

    activeText.forEach((elm) => {
        if (elm.classList.contains('show')) {
            elm.classList.remove('show')
        }
        if (elm.classList.contains(search)) {
            elm.classList.add('show');
        }
    })
})

const clickAmazingContainer = document.querySelector(".amazing-work-content-menu");
const activeAmazingElement = document.querySelectorAll(".oaw-menu-list");
// const landingPageItems = document.querySelectorAll('.landing-page');
const allPictures = document.querySelectorAll('.searching-pic');
const arrAllPictures = [...allPictures];
const buttonAmazing = document.querySelector('.amazing-button');
let counter = 0;
let arrAll = arrAllPictures.slice(7, 19);

clickAmazingContainer.addEventListener('click', (elem) => {
    let cursorTarget = elem.target;
    let search = cursorTarget.dataset.name;
    if (cursorTarget.tagName === 'DIV'){
    activeAmazingElement.forEach((item) =>{
        if(item.classList.contains('oaw-menu-list-active')){
            item.classList.remove('oaw-menu-list-active')
        }
    })
    cursorTarget.classList.add('oaw-menu-list-active');
}
    allPictures.forEach((elm)=> {
        if (elm.classList.contains('show-pictures')) {
            elm.classList.remove('show-pictures')
        }
        if (search === 'all' && counter === 0){

            arrAll.forEach((e)=>{
                e.classList.add('show-pictures');
            })
            buttonAmazing.classList.remove('hide-button');
        }
        else if (search === 'all' && counter !== 0){
            arrAll.forEach((e)=>{
                e.classList.add('show-pictures');
            })
            buttonAmazing.classList.add('hide-button')
        }
        if (elm.classList.contains(search) && search !== "all") {
            elm.classList.add('show-pictures');
            buttonAmazing.classList.add('hide-button');
        }
    })
})
buttonAmazing.addEventListener('click', () =>{
    counter++;
    arrAll = arrAllPictures.slice(7, 31);
    arrAllPictures.forEach((e) => {
        e.classList.remove("show-pictures")
    })
    arrAll.forEach((e) => {
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
