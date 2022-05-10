let btn = document.querySelector(".header-btn")
btn.addEventListener(type="click", () => {
    document.querySelector(".header-square").style.display = "block"
})


let CloseBtn = document.querySelector(".header-close-btn")
CloseBtn.addEventListener(type="click", () => {
    document.querySelector(".header-square").style.display = "none"
})

const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 40,
        stretch: 0,
        depth: 50,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagintion",
    },
});