let brightnessRange = document.getElementById("brightness"),
root = document.documentElement,
brightnessLevel = document.querySelector(".brightness-level");

brightnessRange.addEventListener("input", function () {
    let brightnessValue = brightnessRange.value;
    root.style.filter = `brightness(${brightnessValue/100})`;
    brightnessLevel.innerHTML = `میزان روشنایی صفحه: ${brightnessValue} درصد`;
})