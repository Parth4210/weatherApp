const scaleSelection = (() =>{ 
    const selectBox = document.createElement("div")
    selectBox.classList.add("scaleSelection")

    const celciusBtn = document.createElement("button")
    const fahrenheitBtn = document.createElement("button")
    celciusBtn.classList.add("scaleBtn")
    fahrenheitBtn.classList.add("scaleBtnActive")
    fahrenheitBtn.classList.add("scaleBtn")

    celciusBtn.textContent = "°C"
    fahrenheitBtn.textContent = "°F"

    fahrenheitBtn.addEventListener("click", ()=>{
        celciusBtn.classList.remove("scaleBtnActive")
        fahrenheitBtn.classList.add("scaleBtnActive")
    })

    celciusBtn.addEventListener("click", ()=>{
        fahrenheitBtn.classList.remove("scaleBtnActive")
        celciusBtn.classList.add("scaleBtnActive")
    })


    selectBox.append(celciusBtn, fahrenheitBtn)
    return selectBox
})()

export default scaleSelection