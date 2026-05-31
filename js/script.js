// =========================
// BURGER MENU
// =========================

const burger = document.getElementById("burger");
const mobileNav = document.getElementById("mobileNav");

burger.addEventListener("click", (e) => {
    e.stopPropagation();
    mobileNav.classList.toggle("active");
});

document.querySelectorAll(".mobile-nav a").forEach(link => {
    link.addEventListener("click", () => {
        mobileNav.classList.remove("active");
    });
});

document.addEventListener("click", (e) => {

    if (
        mobileNav.classList.contains("active") &&
        !mobileNav.contains(e.target) &&
        !burger.contains(e.target)
    ) {
        mobileNav.classList.remove("active");
    }

});

// =========================
// LIGHTBOX
// =========================

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

document.querySelectorAll(".art").forEach(img => {

    img.addEventListener("click", () => {

        lightbox.style.display = "flex";
        lightboxImg.src = img.src;

        document.body.style.overflow = "hidden";
    });

});

lightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

    document.body.style.overflow = "";

});

// ESC CLOSE

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        lightbox.style.display = "none";

        document.body.style.overflow = "";

    }

});

// =========================
// COMIC PARTICLES
// =========================

const particles = document.getElementById("particles");

for (let i = 0; i < 100; i++) {

    const dot = document.createElement("div");

    dot.classList.add("dot");

    const size = Math.random() * 8 + 2;

    dot.style.width = size + "px";
    dot.style.height = size + "px";

    dot.style.left = Math.random() * 100 + "%";

    dot.style.animationDuration =
        (Math.random() * 20 + 10) + "s";

    dot.style.opacity = Math.random();

    particles.appendChild(dot);

}

// =========================
// TRANSLATIONS
// =========================

const translations = {

    en: {
        about: "About",
        prices: "Prices",
        gallery: "Gallery",
        contacts: "Contacts",

        hero: "Cute Art • Commissions • Character Design",

        aboutText:
            "Welcome to my portfolio! I create cute illustrations, original characters and commission artwork.",

        head: "Head",
        half: "Half Body",
        full: "Full Body"
    },

    ru: {
        about: "Обо мне",
        prices: "Прайс",
        gallery: "Галерея",
        contacts: "Контакты",

        hero: "Милые рисунки • Заказы • Дизайн персонажей",

        aboutText:
            "Добро пожаловать в моё портфолио! Я создаю милые иллюстрации, оригинальных персонажей и арты на заказ.",

        head: "Голова",
        half: "Половина тела",
        full: "Полное тело"
    },

    fr: {
        about: "À propos",
        prices: "Tarifs",
        gallery: "Galerie",
        contacts: "Contacts",

        hero: "Art mignon • Commandes • Design de personnages",

        aboutText:
            "Bienvenue dans mon portfolio ! Je crée des illustrations adorables, des personnages originaux et des commandes personnalisées.",

        head: "Tête",
        half: "Mi-corps",
        full: "Corps complet"
    },

    de: {
        about: "Über mich",
        prices: "Preise",
        gallery: "Galerie",
        contacts: "Kontakt",

        hero: "Niedliche Kunst • Aufträge • Charakterdesign",

        aboutText:
            "Willkommen in meinem Portfolio! Ich erstelle niedliche Illustrationen, originale Charaktere und Auftragsarbeiten.",

        head: "Kopf",
        half: "Halber Körper",
        full: "Ganzer Körper"
    }

};

// =========================
// LANGUAGE SWITCH
// =========================

function setLanguage(lang) {

    document.querySelectorAll("[data-lang]").forEach(el => {

        const key = el.dataset.lang;

        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }

    });

    document.getElementById("heroText").textContent =
        translations[lang].hero;

    document.getElementById("aboutText").textContent =
        translations[lang].aboutText;

    document.getElementById("headTitle").textContent =
        translations[lang].head;

    document.getElementById("halfTitle").textContent =
        translations[lang].half;

    document.getElementById("fullTitle").textContent =
        translations[lang].full;

    localStorage.setItem("language", lang);

}

// =========================
// LANGUAGE SELECTORS
// =========================

const langDesktop =
    document.getElementById("langDesktop");

const langMobile =
    document.getElementById("langMobile");

if (langDesktop) {

    langDesktop.addEventListener("change", (e) => {

        const lang = e.target.value;

        setLanguage(lang);

        if (langMobile)
            langMobile.value = lang;

    });

}

if (langMobile) {

    langMobile.addEventListener("change", (e) => {

        const lang = e.target.value;

        setLanguage(lang);

        if (langDesktop)
            langDesktop.value = lang;

    });

}

// =========================
// LOAD SAVED LANGUAGE
// =========================

const savedLanguage =
    localStorage.getItem("language") || "en";

setLanguage(savedLanguage);

if (langDesktop)
    langDesktop.value = savedLanguage;

if (langMobile)
    langMobile.value = savedLanguage;

// =========================
// PREVENT DOUBLE TAP ZOOM
// =========================

let lastTouchEnd = 0;

document.addEventListener(
    "touchend",
    function (event) {

        const now = Date.now();

        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }

        lastTouchEnd = now;

    },
    false
);
