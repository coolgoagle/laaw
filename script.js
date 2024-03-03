const mainElem = document.querySelector('main')

function startAnims() {
    console.log("1")
    mainElem.style.setProperty("--currentGunAnimation1", "gunspin1")
    mainElem.style.setProperty("--currentGunAnimation2", "gunspin2")
}

mainElem.addEventListener('mouseenter', function () {
    // Temporarily stop the animation when hovering over the main element
    startAnims();
});