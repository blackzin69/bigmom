function luffy(){
  document.getElementById("zoro").textContent=
  "um texto"
}
function zoro(){
  var love = document.getElementById("chopper").value
love = parseInt(love)


if(love>15 || love<1){
  document.getElementById("zoro").textContent= "Digite um numero de 1 a 15"
  return
}
  
var alfabeto = ['a', 'b', 'c','d', 'e', 'f', 'g', 'h', 'i', 'j', 
    'k','l' , 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 
    'w', 'x', 'y', 'z']

var palavra = document.getElementById("usopp").value
var code = ''
for (var letra of palavra){
    code = code + ' ' +(alfabeto. indexOf (letra) *love)
} document.getElementById("zoro").textContent= code
}