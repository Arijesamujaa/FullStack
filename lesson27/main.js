// var x = 10;
// var y = 5;

// if (x > y) {
//     console.log("this is true");
// } else {
//     console.log("this is wrong");
// }



// if (x < y) {
//     console.log("this is wrong");
// } else {
//     console.log("this is true");
// }


// if (y > x) {
//     console.log("this is true");
// } else {
//     console.log("this is wrong");
// }

// if (x == 7) {
//     console.log("10=7");
// } else {
//     console.log("10 is not equal 7")
// }

var input = document.getElementById("input_id");
var button = document.getElementById("btn_id");
var text = document.getElementById("text_id");

button.onclick = function(){
    if(parseInt(input.value) == 10){
        text.innerHTML = "Numri eshte i barabarte me 10"
    }
    else if(parseInt(input.value) < 10){
        text.innerHTML = "Numri eshte me i vogel se 10"
    }
    else{
        text.innerHTML = "Numri eshte me i madh se 10"
    }
}

var btn2 = document.getElementById("answer");
var input1 = document.getElementById("input1_id");
var input2 = document.getElementById("input2_id")
var answer = document.getElementById("text1");

btn2.addEventListener("click", function(){
    answer.innerHTML = parseInt(input1.value) + parseInt(input2.value);
})
