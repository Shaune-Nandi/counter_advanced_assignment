const play_btn = document.getElementById("play_btn");
let heads = document.getElementById("heads");
let tails = document.getElementById("tails");
let selection = document.getElementById("selection");
let remaining_rounds = document.getElementById("remaining_rounds");
let display_text = document.getElementById("display_text");
let result = document.getElementById("result");
let your_score = document.getElementById("your_score");
let computer_score = document.getElementById("computer_score");
let image = document.getElementById("image");

let human = 0;
let computer = 0;




heads.addEventListener("click", function head_selection(){
  selection.innerHTML = "You: <strong>" + heads.value + "</strong><br>" + "Computer: <strong>tails</strong>";
  display_text.innerHTML = " ";
})

tails.addEventListener("click", function tail_selection(){
  selection.innerHTML = "You: <strong>" + tails.value + "</strong><br>" + "Computer: <strong>heads</strong>";
  display_text.innerHTML = " ";
})


play_btn.addEventListener("click", function play(){

  if (!heads.checked && !tails.checked) {
    display_text.innerHTML = "<strong>*select one to play</strong>";
    selection.innerHTML = " "
  }else {
    let rnd_no = Math.floor(Math.random() * 100000);

    // even = heads & odd = tails
    if (rnd_no % 2 == 0) {
      result.innerHTML = "heads"
      image.innerHTML = '<img src="./assets/images/head-side.png">'
    }else if (rnd_no % 2 == 1) {
      result.innerHTML = "tails"
      image.innerHTML = '<img src="./assets/images/tail-side.png">'

    }

    heads.checked
    if (heads.checked) {
      if (result.innerHTML == "heads") {
        your_score.innerHTML = (parseInt(your_score.textContent) + 1).toString();
      } else if (result.innerHTML == "tails") {
        computer_score.innerHTML = (parseInt(computer_score.textContent) + 1).toString();
      }
    }else if (tails.checked) {
      if (result.innerHTML == "tails") {
        your_score.innerHTML = (parseInt(your_score.textContent) + 1).toString();
      } else if (result.innerHTML == "heads") {
        computer_score.innerHTML = (parseInt(computer_score.textContent) + 1).toString();
      }
    }


    heads.checked = false;
    tails.checked = false;


    remaining_rounds.innerHTML = (parseInt(remaining_rounds.textContent) - 1).toString()
  


    }

});


