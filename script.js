const h1 = document.querySelector("h1")
const ans = document.querySelector("#ans")
const prev = document.querySelector("#prev")
const step = document.querySelector("#step")
const cls = document.querySelector("#cls")
const ce = document.querySelector("#ce")
const num = document.querySelectorAll(".num")
const twit = document.querySelector("#twit")
const buttons = document.querySelectorAll('.num')
const mas = document.querySelectorAll('button')
const keys = document.querySelectorAll('.key')
const opp = document.querySelectorAll('.opp')
const rules = ["Do not divide by Zero", "Do not write rubbish in me", "Do not ask me bodmas", "Do not ask me pemdas"]
let sign = false
let done = false
let asign = ''
let first = ''
second = ''
soln = ''
prevsign = ''

setInterval(function(){h1.innerHTML = rules[Math.floor(Math.random()*4)]}, 3000)

buttons.forEach(btn => btn.addEventListener("click", function(){
  if(ans.innerHTML === '0' || ans.innerHTML === '+' || ans.innerHTML === '÷' || ans.innerHTML === '–' || ans.innerHTML === '×'){
    ans.innerHTML = btn.innerHTML
  }
    else{ans.innerHTML = (ans.innerHTML + btn.innerHTML).slice(0,9)}
}))

keys.forEach(btn => btn.addEventListener("click", function(){
  if(ans.innerHTML.length <= 9){
    if(ans.innerHTML.slice(-1) === btn.innerHTML || ans.innerHTML.slice(-2) === btn.innerHTML){
      if(step.innerHTML === '0'){step.innerHTML = btn.innerHTML}
        else{step.innerHTML = (step.innerHTML + btn.innerHTML).slice(-24)}
    }
  }
}))

opp.forEach(btn => btn.addEventListener("click", function(){
  if(ans.innerHTML === '0'){
    ans.innerHTML = ans.innerHTML + btn.innerHTML
    step.innerHTML = step.innerHTML + btn.innerHTML
  }
    else if(step.innerHTML.slice(-1) === '+' || step.innerHTML.slice(-1) === '÷' || step.innerHTML.slice(-1) === '–' || step.innerHTML.slice(-1) === '×'){
      step.innerHTML = step.innerHTML.slice(0, -1) + btn.innerHTML
      ans.innerHTML = btn.innerHTML
    }
    else{
      ans.innerHTML = btn.innerHTML
      step.innerHTML = step.innerHTML + btn.innerHTML
    }
}))

cls.addEventListener("click", function() {
  if(ans.innerHTML.length === 1){ans.innerHTML = '0'}
    else{ans.innerHTML = ans.innerHTML.slice(0,-1)}
  step.innerHTML = step.innerHTML.slice(0,-1)
})

ce.addEventListener("click", function() {
  ans.innerHTML = '0'
  prev.innerHTML = '0'
  step.innerHTML = '0'
  sign = false
 done = false
 asign = ''
 first = ''
second = ''
soln = ''
prevsign = ''
})

twit.addEventListener("click", function() {
  location.assign("https://twitter.com/__Urama");
})

num.forEach(btn => btn.addEventListener("click", function(){
  if (!done){
    first = Number(ans.innerHTML)
  }else{second = Number(ans.innerHTML)}
  
}))

opp.forEach(btn => btn.addEventListener("click", function(){
  if (ans.innerHTML === ('0'+ btn.innerHTML)){fist = 0;ans.innerHTML = '0'}
  if (!sign){sign = true
  assign = btn.innerHTML
            done = true
            }
  else{
    prevsign = assign
      eval(prevsign, prev)
      done = true}
  
}))

function eval(x, y){
  if (x === '÷'){y.innerHTML = Number(divide(first, second))
                 if (ans.innerHTML.toString().length > 9){ans.innerHTML = "0"}
                  if (ans.innerHTML === 'NaN'){ans.innerHTML = '0'}}
  if (x === '–'){y.innerHTML = Number(minus(first, second))
                 if (ans.innerHTML.toString().length > 9){ans.innerHTML = "0"}
                  if (ans.innerHTML === 'NaN'){ans.innerHTML = '0'}}
  if (x === '×'){y.innerHTML = Number(multiply(first, second))
                 if (ans.innerHTML.toString().length > 9){ans.innerHTML = "0"}
                  if (ans.innerHTML === 'NaN'){ans.innerHTML = '0'}}
  if (x === '+'){y.innerHTML = Number(add(first, second))
                 if (ans.innerHTML.toString().length > 9){ans.innerHTML = "0"}
                  if (ans.innerHTML === 'NaN'){ans.innerHTML = '0'}
                }
  
 if (y === ans){sign = false; done =  false
               setTimeout(function(){ first = Number(ans.innerHTML)}, 1000)}
  else{setTimeout(function(){ first = Number(prev.innerHTML)}, 1000)}
  step.innerHTML = first+x+second
}


function divide(x,y){
  return (x / y).toFixed(4)
}
function multiply(x,y){
  return x * y
}
function add(x,y){
  return x + y
}
function minus(x,y){
  return x - y
}