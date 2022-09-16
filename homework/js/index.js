$(document).ready(function(){
    const label = $('.label output');
 label.val('0') 
    let firstNstring = '';
    let secondNstring = '';
    let arifmetic = '';
    let isSecond = false;
   let result = 0;

label.css('color','white')
  let block = $('.block')
block.val('')

 const math= (arifmetic,firstN,SecondN) => {
    switch (arifmetic) {
        case '+':
            return firstN + SecondN        
        case '-':
            return firstN - SecondN
        case '*':
            return firstN * SecondN
          case '/':
            return firstN / SecondN
        default:
            /* code */
            break;
    }
 }
   //arifmetic buttons
$('#plus').click(() => {
arifmetic = '+'
isSecond = true;
label.val(firstNstring + arifmetic)
})

$('#minus').click(() => {
    arifmetic = '-'
    isSecond = true;
    label.val(firstNstring + arifmetic)
    })

$('#multiply').click(() => {
     arifmetic = '*'
    isSecond = true;
    label.val(firstNstring + arifmetic)
        })

$('#del').click(() => {
     arifmetic = '/'
        isSecond = true;
        label.val(firstNstring + arifmetic)
        })
            
//numeric buttons
$('#0').click(() => {
    !isSecond ? firstNstring+='0' : secondNstring += '0';
    label.val(!isSecond ? firstNstring : firstNstring +arifmetic + secondNstring )
})
$('#1').click(() => {
    !isSecond ? firstNstring+='1' : secondNstring += '1';
    label.val(!isSecond ? firstNstring :firstNstring +arifmetic + secondNstring)
})
$('#2').click(() => {
    !isSecond ? firstNstring+='2' : secondNstring += '2';
    label.val(!isSecond ? firstNstring : firstNstring +arifmetic + secondNstring)
})
$('#3').click(() => {
    !isSecond ? firstNstring+='3' : secondNstring += '3';
    label.val(!isSecond ? firstNstring : firstNstring +arifmetic + secondNstring)
})
$('#4').click(() => {
    !isSecond ? firstNstring+='4' : secondNstring += '4';
    label.val(!isSecond ? firstNstring : firstNstring +arifmetic + secondNstring)
})
$('#5').click(() => {
    !isSecond ? firstNstring+='5' : secondNstring += '5';
    label.val(!isSecond ? firstNstring : firstNstring +arifmetic + secondNstring)
})
$('#6').click(() => {
    !isSecond ? firstNstring+='6' : secondNstring += '6';
    label.val(!isSecond ? firstNstring : firstNstring +arifmetic + secondNstring)
})
$('#7').click(() => {
    !isSecond ? firstNstring+='7' : secondNstring += '7';
    label.val(!isSecond ? firstNstring : firstNstring +arifmetic + secondNstring)
})
$('#8').click(() => {
    !isSecond ? firstNstring+='8' : secondNstring += '8';
    label.val(!isSecond ? firstNstring : firstNstring +arifmetic + secondNstring)
})
$('#9').click(() => {
    !isSecond ? firstNstring+='9' : secondNstring += '9';
    label.val(!isSecond ? firstNstring : firstNstring + arifmetic + secondNstring)
})
 //equals btn
 $('#equals').click(() => {
      if(arifmetic === '/' && secondNstring === '0'){
    return label.val('ERROR')
 }
     result = math(arifmetic, 
        parseInt(firstNstring),
         parseInt(secondNstring))
         label.val(result)
         reg(result)
      firstNstring = result;
      secondNstring = '';
 })

 $('#clear').click(() => {
    firstNstring = '';
     secondNstring = '';
    arifmetic = '';
    isSecond = false;
    label.val('0')

 })

const reg = (print) => {

       $('.block-wr').prepend(`<div id = "m"> <div class = "red"> </div><div id = "cross1"> 
         <p>${firstNstring} ${arifmetic} ${secondNstring} = ${print}</p> </div> <div id ="cross"> &#10006;</div>
          </div>`);
         
    };
    $('.block-wr').on('click','#cross', function() {
        $(this).parent().remove();
    })
   
    $('.block-wr').on('click','.red', function() {
        $(this).toggleClass('red1');
    })
 
  
})



