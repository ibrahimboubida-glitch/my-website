"use strict";

/* =========================
   القائمة
========================= */

const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

if (menuButton && navigation) {

    menuButton.addEventListener("click", function () {
        navigation.classList.toggle("active");
    });

}


/* =========================
   إغلاق القائمة بعد اختيار رابط
========================= */

const navigationLinks = document.querySelectorAll("#navigation a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navigation) {
            navigation.classList.remove("active");
        }

    });

});


/* =========================
   زر العودة للأعلى
========================= */

const topButton = document.getElementById("topButton");

window.addEventListener("scroll", function () {

    if (!topButton) {
        return;
    }

    if (window.scrollY > 400) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});


/* =========================
   الضغط على زر الأعلى
========================= */

if (topButton) {

    topButton.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}
