
// njejt osht sikur e dyta
// var button1 = document.querySelector("button");

// button1.onclick = function(){
//     alert("hello world")
// }
// var button1 = document.getElementById("btn1");
// var button2 = document.getElementById("btn2");
// var button3 = document.getElementById("btn3");


// button1.onclick = function(){
//     alert("Hello World");
// }
// button2.onmouseleave = function(){
//     alert("Mouse leave");
// }
// button3.onmouseover = function(){
//     alert("Mouse hover");
// }



var v_button = document.getElementById("btn1");


var v_text = document.querySelector("h1");



v_button.onclick = function () {
    v_text.setAttribute("id", "txt1");
}
// v_button.onclick = function(){
//     v_text.style.color = "red";
//     v_text.style.backgroundColor = "lightgrey";
//     v_text.style.alignItems = "center";
//     v_text.style.fontSize = "100px";
//     v_text.style.padding = "20px";
// }


// //mouse over css


// v_text.onmouseover = function(){
//     v_text.style.cssText = "color:red; background-color:lightgrey; align-items:center; font-size:100px; padding:20px;"
// }