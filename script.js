let stpbl1 = document.getElementById('stepbl1');
let stpbrdr1 = document.getElementById('stepbr1');

let stpbl2 = document.getElementById('stepbl2');
let stpbrdr2 = document.getElementById('stepbr2');

let stpbl3 = document.getElementById('stepbl3');
let stpbrdr3 = document.getElementById('stepbr3');

stpbl1.onmouseover = function(){
    stepbr1.style.borderBottom = '3px solid white';
}

stpbl1.onmouseout = function(){
    stepbr1.style.borderBottom = '3px solid black';
}

stpbl2.onmouseover = function(){
    stepbr2.style.borderBottom = '3px solid white';
}

stpbl2.onmouseout = function(){
    stepbr2.style.borderBottom = '3px solid black';
}

stpbl3.onmouseover = function(){
    stepbr3.style.borderBottom = '3px solid white';
}

stpbl3.onmouseout = function(){
    stepbr3.style.borderBottom = '3px solid black';
}