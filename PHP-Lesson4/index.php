<?php

// phpinfo();

// $x = "Hello";
// print_r($x);


// $x = 5;
// echo gettype($x) . "<br>";

// $y = 10.5;
// echo gettype($y) . "<br>";

// $z = "Hello";
// echo gettype($z) . "<br>";


// function displayVersion(){
//     echo "this is php version".phpversion();
//     echo "\n";
// }

// displayVersion();


function helloWorld(){
    echo "Hello World <br>";
}

helloWorld();


function sum(){
    $value = 20 + 30;
    echo "$value <br>";
}

sum();

function maximum($x, $y){
    if($x > $y){
        return $x;
    }else{
        return $y;
    }
}


    echo maximum(20,30);


function fully_divisible($n){
    if($n%2==0){
        return " <br> $n is divisible by 2";
    }else{
        return " <br> $n is not divisible by 2";
    }
}

echo (fully_divisible(4)."<br>");
echo (fully_divisible(5)."<br>");
echo (fully_divisible(20)."<br>");


$x = 5;

function globalVariable(){
    $y = 10;
    echo " <br> $y";
}
echo " <br> $x";
globalVariable();

$a = 20;
$b = 30;

function ab(){
    global $a, $b;
    $b = $a + $b;
}

ab();
echo "<br> $b";

function staticVariable(){
    static $count  = 0;
    $count++;
    echo " <br> The value of count is $count <br>";
}

staticVariable();
staticVariable();



// $sports = array('Football', 'Basketball', 'Handball');
// print_r($sports)."<br>";

$sports = ['Football', 'Basketball', 'Handball'];
$len = count($sports);

// array_push($sports, 'Voleyball');
// array_pop($sports);
// array_unshift($sports, 'Tennis');
// array_shift($sports);
// 


// for($i=0; $i<$len; $i++){
//     echo $sports[$i]."<br>";
// }

$myvalues = array(12,24,36,48);

var_dump(array_sum($myvalues));



?>