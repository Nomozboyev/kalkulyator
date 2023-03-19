var btn1=document.querySelector('#btn1')
var btn2=document.querySelector ('#btn2')
var btn3=document.querySelector('#btn3')
var btn4=document.querySelector('#btn4')
var number1=document.querySelector('#number1')
var number2=document.querySelector('#number2')
var mathematicalAction=document.querySelector('.mathematical_action')
var answer=document.querySelector('.answer')

function coun_plus (plus){
    plus.preventDefault()
    //  agar btn click bolsa  shu funksiya ishlaydigan qil ?
    mathematicalAction.textContent=" + "
    console.log( answer.textContent= Number(number1.value )+Number( number2.value) )

}   
function coun_minus (minus){
    minus.preventDefault()
    mathematicalAction.textContent=" - "
    console.log( answer.textContent= Number(number1.value )-Number( number2.value) )

}   
function coun_multiyplay(multiyplay){
    multiyplay.preventDefault()
    mathematicalAction.textContent=" * "
    console.log( answer.textContent= Number(number1.value )*Number( number2.value) )

}   
function coun_divite(divite){
    divite.preventDefault()
    mathematicalAction.textContent=" / "
    console.log( answer.textContent= Number(number1.value )/Number( number2.value) )

}   


btn1.addEventListener( "click",coun_plus )
btn2.addEventListener( "click",coun_minus )
btn3.addEventListener( "click",coun_multiyplay )
btn4.addEventListener( "click",coun_divite )
