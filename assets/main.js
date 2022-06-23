const play_btn = document.querySelector("#play_btn")


const indicator = document.querySelector("#number-indicator")
const disp = document.querySelector("#display-heading")

play_btn.addEventListener('click', function play() {
  let coin_option = document.getElementById("coin_option").value
  disp.textContent = "added 5" + coin_option
  indicator.textContent = (parseInt(indicator.textContent) + 5).toString()
})