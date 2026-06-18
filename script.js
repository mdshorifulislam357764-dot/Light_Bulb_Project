const bulb = document.getElementById("bulb");
const switchBtn = document.getElementById("switch");

switchBtn.addEventListener("click", () => {
    bulb.classList.toggle("on");
    switchBtn.classList.toggle("on");
});
