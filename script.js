const lenis = new Lenis()


function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)




window.addEventListener('scroll', function () {
    const bigTextField = document.getElementById('bigTextField');
    const japaneseText = document.getElementById('japaneseText');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    if (scrollPosition > windowHeight * 2) {
        bigTextField.style.opacity = '0';
        japaneseText.style.opacity = '0';
    } else {
        bigTextField.style.opacity = '1';
        japaneseText.style.opacity = '1';
    }
});

gsap.registerPlugin(ScrollTrigger)
document.querySelectorAll('.elem').forEach(elem => {
    let image = elem.querySelector("img")
    let tl = gsap.timeline()
    let xtransform = gsap.utils.random(-100, 100);

    tl
        .set(image, {
            transformOrigin: `${xtransform < 0 ? 0 : '100%'}`,
        }, "start")
        .to(image, {
            scale: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: elem,
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        }, "start")
        .to(elem, {
            xPercent: xtransform,
            ease: 'none',
            scrollTrigger: {
                trigger: elem,
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        })
})




function animateCards(cards) {
    cards.forEach(card => {
        gsap.to(card, {
            scale: 0.6,
            opacity: 0,
            scrollTrigger: {
                trigger: card,
                start: 'top 15%',
                end: 'bottom 15%',
                scrub: true,
            },
        });
    });
}

const cards = ['.card1', '.card2', '.card3', '.card4', '.card5', '.card6', '.card7', '.card8'];
animateCards(cards);