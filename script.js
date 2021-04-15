var myArray = ["Rock","Paper","Scisors"]

function randint(start,end){
    return Math.floor(Math.random()*(end-start+1))+start;
  }


let RPSgenerate = () => {
    return myArray[randint(0,2)];
}


var rock = document.querySelectorAll("button")[0].textContent;
var paper = document.querySelectorAll("button")[1].textContent;
var scisors = document.querySelectorAll("button")[2].textContent;

var choice = document.querySelector("b");

var finale = (what) => {
    let result = document.querySelector(".result h3");
    let your_choice = what;
    let comp_choice = RPSgenerate();

    if (your_choice == comp_choice) {
        result.textContent = "Draw";
        result.style.color = "rgb(214, 231, 135)";
}
    else if (your_choice == rock) {
        if (comp_choice == scisors) {
            result.textContent = "You win";
            result.style.color = "rgb(42, 207, 92)";
        }
        else {
            result.textContent = "You Lose";
            result.style.color = "rgb(175, 34, 15)";
        }
    }
    else if (your_choice == paper) {
        if (comp_choice == rock) {
            result.textContent = "You win";
            result.style.color = "rgb(42, 207, 92)";
        }
        else {
            result.textContent = "You Lose";
            result.style.color = "rgb(175, 34, 15)";
        }
    }
    else {
        if (comp_choice==paper) {
            result.textContent = "You win";
            result.style.color = "rgb(42, 207, 92)";
        }
        else {
            result.textContent = "You Lose";
            result.style.color = "rgb(175, 34, 15)";
        }
    }
    var ipologistis = document.querySelector("#score_1").textContent;
    var esi = document.querySelector("#score_2").textContent;
    if (result.textContent.toLowerCase() == "you win") {
        document.querySelector("#score_2").textContent = Number(document.querySelector("#score_2").textContent) + 1

    }
    else if(result.textContent.toLowerCase() == "you lose") {
        document.querySelector("#score_1").textContent = Number(document.querySelector("#score_1").textContent) + 1
    
    }
    if (comp_choice == "Rock") {
        document.querySelector("img").src = "./images/rock.jpg";
    }
    else if (comp_choice == paper) {
        document.querySelector("img").src = "./images/paper.jpg" // "http://i.ytimg.com/vi/c0WwpEx-y64/maxresdefault.jpg";
    }
    else {
        document.querySelector("img").src = "./images/scissors.jpg" //"https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Pair_of_scissors_with_black_handle%2C_2015-06-07.jpg/1200px-Pair_of_scissors_with_black_handle%2C_2015-06-07.jpg"
    }
}
