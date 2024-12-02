<?php

// $num = 20;

// if($num<18){
//     echo "$num is less than 0";
// }else{
//     echo "$num is bigger than 0";
// }


// $age = 13;
// if(($age>12) && ($age < 20)){
//     echo "You are a teenager";
// }

// $number = 2;

// if($number < 0){
//     echo "The value of the number is a negative number";
// }
// elseif($number == 0){
//     echo "The number is equal to 0";
// }else{
//     echo "The value of number is positive";
// }

// $day = "Test";

// switch($day){
//     case 'Monday':
//     echo "Today it is Monday";
//     break;
//     case 'Tuesday':
//     echo "Today it is Tuesday";
//     break;
//     case 'Wednesday':
//     echo "Today it is Wednesday";
//     break;
//     case 'Thursday':
//     echo "Today it is Thursday";
//     break;
//     case 'Friday':
//     echo "Today it is Friday";
//     break;
//     case 'Saturday':
//     echo "Today it is Saturday";
//     break;
//     case 'Sunday':
//     echo "Today it is Sunday";
//     break;
//     default:
//     echo "Invalid Day";
//     break;
// }


// $x = 1;

// while($x<5){
//     echo "The number is:  $x  <br>";
//     $x++;
// }

// do{
//     echo "The number is:  $x  <br>";
//     $x++;
// }while($x < 5);

// for($x = 0; $x<=10; $x++){
//     echo "The number is:  $x  <br>";
// }

$cars = array("BMW"=>"18", "AUDI"=>"20", "Tesla"=>"22");

// foreach($cars as $car){
//     echo "$car <br>";
// }

foreach($cars as $x => $value){
    echo "$x => $value <br>";
}





?>