const scaleSelection = (() =>{ 
    const selectBox = document.createElement("div")
    selectBox.classList.add("scaleSelection")

    const celciusBtn = document.createElement("button")
    const fahrenheitBtn = document.createElement("button")
    celciusBtn.classList.add("scaleBtn")
    fahrenheitBtn.classList.add("scaleBtn")

    celciusBtn.textContent = "°F"
    fahrenheitBtn.textContent = "°C"

    selectBox.append(fahrenheitBtn, celciusBtn)
    return selectBox
})()

export default scaleSelection