// //Navbar fixed
// window.onscroll = function () {
//     const header = document.querySelector('header');
//     const fixedNav = header.offsetTop;

//     if (window.pageY0ffset > fixedNav) {
//         header.classList.add('navbar-fixed');
//     } else {
//         header.classList.remove('navbar-fixed');
//     }
// };
document.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
});


//Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});


//Slider Testimoni
const slider = document.getElementById("testimonialSlider");
    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("prev");

    let scrollAmount = 0;

    nextBtn.addEventListener("click", () => {
        scrollAmount += slider.offsetWidth;
        slider.scrollTo({
            left: scrollAmount,
            behavior: "smooth"
        });
        // Reset scrollAmount if it's at the end
        if (scrollAmount >= slider.scrollWidth - slider.offsetWidth) {
            scrollAmount = 0;
        }
    });

    prevBtn.addEventListener("click", () => {
        scrollAmount -= slider.offsetWidth;
        if (scrollAmount < 0) {
            scrollAmount = slider.scrollWidth - slider.offsetWidth;
        }
        slider.scrollTo({
            left: scrollAmount,
            behavior: "smooth"
        });
    });