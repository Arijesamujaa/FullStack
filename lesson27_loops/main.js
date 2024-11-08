var shuma = 0;
for(i = 15; i<=47; i++){
    shuma = shuma + i;
}
console.log(shuma);

var array1 = [5, 7, 8, 9, 10, 15];
var sum = 0;
for(i=0; i<array1.length; i++){
    sum = sum + array1[i];
}
console.log(sum);

// 'of' perdoret per me ju qas vlerave te elementeve ne array
var sum1 = 0
for(x of array1){
    sum1 += x;
}
console.log(sum1);


// 'in' perdoret per me ju qas key ose indeksave te elementeve ne array
var sum2 = 0
for(x in array1){
    sum2 += x;
}
console.log(sum2);


var newName = document.getElementById("name");
var addBtn = document.getElementById("addName");
var showNames = document.getElementById("showNames")

var ListOfNames = [];

addBtn.addEventListener("click", function addName(){
    ListOfNames.push(newName.value);
    addNames();
    console.log(ListOfNames);
})

function addNames(){
    for(i=0; i<ListOfNames.length; i++){
        showNames.innerHTML = ListOfNames[i];
    }
}

