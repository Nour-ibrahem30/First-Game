document.addEventListener("DOMContentLoaded", function () {
    function goFullScreen() {
        let elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    }

    // تشغيل وضع الشاشة الكاملة عند النقر
    document.addEventListener("click", function () {
        goFullScreen();
    }, { once: true });

    // تشغيل الصوت عند النقر (لتجاوز قيود المتصفحات)
    document.addEventListener("click", function () {
        playRandomSound();
    }, { once: true });

    // تشغيل تغيير الخلفية مباشرةً
    changeBackground();
    setInterval(changeBackground, 30000);
});

// 🎵 تشغيل صوت عشوائي
const sounds = [
    "./Sound-File/2024-12-08_-_Detective_Revelation_-_www.FesliyanStudios.com.mp3",
    "./Sound-File/موسيقى غامضة خيالية روعة -- Sons of Pythagoras - Counting The Cost.mp3"
];

function getRandomIndex() {
    return Math.floor(Math.random() * sounds.length);
}

function playRandomSound() {
    let audio = new Audio(sounds[getRandomIndex()]);
    audio.play();
    audio.addEventListener("ended", playRandomSound);
}

// 🌌 تغيير الخلفية تلقائيًا
const backgrounds = [
    "url('./Img/One.jpg')",
    "url('./Img/Two.jpg')",
    "url('./Img/Three.jpg')",
    "url('./Img/Four.jpg')"
];

let currentIndex = 0;

function changeBackground() {
    document.body.style.backgroundImage = backgrounds[currentIndex];
    document.body.style.backgroundSize = "cover";
    document.body.style.transition = "background 3s ease-in-out";
    currentIndex = (currentIndex + 1) % backgrounds.length;
}
