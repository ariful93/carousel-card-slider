let sliderWrapper = document.querySelector('.card-wrapper')
let sliderList = document.querySelector('.card-list')
let slides = document.querySelectorAll('.card-item')
let nexBtn = document.querySelector('.next-btn')
let prevBtn = document.querySelector('.prev-btn')

let itemWidth = slides[0].clientWidth;
let index = 0;
let autoSlideInterval;

// Next slide handler func
nexBtn.addEventListener('click', () => {
    nextSlide()

    // resetAutoSlide()
})

// Prev slide handler func
prevBtn.addEventListener('click', () => {
   prevSlide()

//    resetAutoSlide()
   
})

// Next slide func
let nextSlide = () => {
    index = (index + 1) % slides.length

    slideUpdate();
}

// Prev Slide func
let prevSlide = () => {
    index = (index - 1 + slides.length) % slides.length
    slideUpdate();
}

// Update slide func
let slideUpdate = () => {
    sliderList.style.transform = `translateX(${-index * itemWidth}px)`;
   
}

// Creae auto slide func
// let autoSlide = () => {
//     setInterval(() => {
//         nextSlide()
//     }, 3000)
// }

// Reset auto slide
// let resetAutoSlide = () => {
//     clearInterval(autoSlideInterval)
//     autoSlide()
// }

// Run auto slide
// autoSlide();