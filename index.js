const headerIcon = document.querySelector(".header-icon");
const header = document.querySelector(".header");
const headerMenu = document.querySelector(".header-menu");
headerIcon.addEventListener("click", function () {
    header.classList.add("active");
    headerMenu.classList.add("active");
});
header.addEventListener("click", function (e) {
    if (e.target == e.currentTarget) {
        header.classList.remove("active");
        headerMenu.classList.remove("active");
    }
});

const listImg = document.querySelectorAll(".banner-list li");
const thumb = document.querySelector(".banner-thumb_big img");

listImg.forEach((element) => {
    element.addEventListener("click", function () {
        listImg.forEach((element2) => {
            element2.classList.remove("active");
        });
        element.classList.add("active");

        thumb.src = element.querySelector("img").src;
    });
});
