// Apparition progressive des sections

const elementsToReveal = document.querySelectorAll(
    ".section, .project-card, .skill-card, .experience-card, .certification-card, .timeline-item, .contact-card"
);

elementsToReveal.forEach(element => {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });

    },
    {
        threshold: 0.08
    }
);

elementsToReveal.forEach(element => {
    observer.observe(element);
});


// Changement léger de la barre de navigation au scroll

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.borderBottomColor =
            "rgba(120, 151, 181, 0.24)";

    } else {

        header.style.borderBottomColor =
            "rgba(36, 51, 65, 0.72)";

    }

});


// Petit mouvement de la carte d'accueil avec la souris

const profileCard = document.querySelector(".profile-card");

if (profileCard) {

    profileCard.addEventListener("mousemove", event => {

        const rectangle =
            profileCard.getBoundingClientRect();

        const x =
            event.clientX - rectangle.left;

        const y =
            event.clientY - rectangle.top;

        const centerX =
            rectangle.width / 2;

        const centerY =
            rectangle.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -2;

        const rotateY =
            ((x - centerX) / centerX) * 2;

        profileCard.style.transform =
            `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;

    });


    profileCard.addEventListener("mouseleave", () => {

        profileCard.style.transform =
            "rotate(2deg)";

    });

}
