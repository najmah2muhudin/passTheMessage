var delet = document.getElementById("dlte")
var button = document.getElementById("button")
var input = document.getElementById("input")
button.addEventListener("click", function(){
   document.getElementById("output").innerHTML = input.value
   if(input.value === ''){
      document.getElementById("output").innerHTML = "You have not entered any message!"
   }
   input.value = '';

})
delet.addEventListener("click", function(){
   document.getElementById("output").innerHTML = '';
})


