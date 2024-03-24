window.addEventListener("load", () => {
    let handLeft = document.getElementById("handLeft")
    let handRight = document.getElementById("handRight")

    handLeft.classList.add("hand__left__animation")
    handRight.classList.add("hand__right__animation")

    handLeft.addEventListener("animationend", () => {
        handLeft.classList.remove("hand__left__animation")
        handRight.classList.remove("hand__right__animation")
    })
})