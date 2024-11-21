var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    breakpoints: {
        200: {
            slidesPerView: 2,
        },
        435: {
            slidesPerView: 3,
        },
        550: {
            slidesPerView: 4,
        },
        765: {
            slidesPerView: 5,
        },
        1024: {
            slidesPerView: 7,
        },
    },

    autoplay: {
        delay: 2500,
    },
})

var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        615: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1168: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
    loop: true,

    autoplay: {
        delay: 3000,
    },
})
