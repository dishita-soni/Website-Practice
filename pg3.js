document.querySelector("#btn").addEventListener('click', ()=>{
    num1= document.querySelector('#num1').value; 
    num2= document.querySelector('#num2').value; 
    num3= document.querySelector('#num3').value; 
    num4= document.querySelector('#num4').value; 
    if(''+num1+num2+num3+num4==="1694") {
        location.href='page4.html';
    } else {
        alert("Oops! Try again!");
    };
});