// Sum of two numbers
function Sum(a,b) {
    document.getElementById('sumA').innerHTML = a;
    document.getElementById('sumB').innerHTML = b;
    return a * b;
}
var s1 = (Sum(5,12));
document.getElementById('sum').innerHTML = s1;

//Fibonacci Series

function Fib(fb){
    document.getElementById('fbn').innerHTML = fb;
    var fc = 1;
    for(let i = fb ; i > 0; i--)
    {
        fc = i * fc;
    }
    return fc;
}
var fb1 = Fib(5);
document.getElementById('fbs').innerHTML = fb1;

//Pattern 1 
 function Pattern1( n ){
    for(let i = 0; i < n ; i++)
    {
        for(let j = 0; j < n ; j++)
        {
            document.write(' * ');
        }
    document.write("<br>");
    }
    document.write("<br>");
}
var p1 = Pattern1(5);

//pattern 2
function Pattern2(  ){
    for(let i = 1; i <= 5 ; i++)
    {
        for(let j = 0; j <5; j++)
        {
            document.write( " " + i + " " );
        }
    document.write("<br>");
    }
    document.write("<br>");
}
Pattern2();

//pattern 3
function Pattern3(  ){
    for(let i = 1; i <= 5 ; i++)
    {
        for(let j = 5; j > 0; j--)
        {
            document.write(" " + j + " " );
        }
    document.write("<br>");
    }
    document.write("<br>");
}
Pattern3();

//Pattern 4
function Pattern4(  ){
    for(let i = 1; i <= 5 ; i++)
    {
        for(let j = 1; j <= 5; j++)
        {
            document.write( " " + j*j + " " );
        }
    document.write("<br>");
    }
    document.write("<br>");
}
Pattern4();

function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  console.log(x);
}
