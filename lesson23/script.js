function showMessage(){
    alert("This is inside the function")
}

function shuma(nr1, nr2){
    return nr1+nr2;
}

console.log("Shuma e numrave: " + shuma(3,4))

function convertTemperature(f){
    c=5/9*(f-32);
    return c;
}

console.log("Temperatura ne celsius: " + convertTemperature(70));

var arrowFunction = () => alert("Hello World");
// arrowFunction();

var pershendetje = emri =>alert(`Miredita ${emri}`)
//pershendetje("Arijesa");

function dsFunction() {
    var localVar="DigitalSchool"
    console.log(localVar)
}

dsFunction();
//alert(localVar);

function syprinaTrekendeshit(baza, lartesia) {
    return 0.5*baza*lartesia;
}

console.log("Syprina e trekendeshit: " + syprinaTrekendeshit(5, 7))

var makina={
    emri:"BMW",
    color:"Black",
    year:2020,
    startEngine: function(){
        alert("Vrooomm!!!")
    },
    get GetColor(){
        return this.color;
    },

    set SetColor(newColor){
        this.color=newColor
    }

}

console.log(makina['emri']);
console.log(makina.color);
//makina.startEngine();

var computer = new Object();
computer.name="Lenovo"
computer.CPU="Intel Core i7"
computer.RAM="16GB"

computer.type=()=>{
    console.log("Start PC");
}

computer.type()

console.log(makina.GetColor)
makina.SetColor="Gray"
console.log(makina.GetColor)




