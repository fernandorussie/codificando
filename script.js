// var btn = document.querySelector("#btn");
// var result = document.querySelector("#result");

// btn.addEventListener("click", function(ev) {
//     ev.preventDefault();
//     var input = document.querySelector("#input-text").value;
//     for (var i = 0; i < input.length; i++) {
//         var item = document.createElement('p');
//         item.innerText = `${input[i]} = ${input.charCodeAt(i)}`;
//         result.appendChild(item);
//     }
// })

 
var btn = document.querySelector("#btn");
var result = document.querySelector("#result");
var form = document.querySelector(".form");


btn.addEventListener("click", function(ev) {
    var radio = document.querySelector('input[name="change"]:checked').value;
    if(form.checkValidity()){
        ev.preventDefault();
        
        if(radio === "true"){
            var desloc = document.querySelector("#desloc").value;
            var letra = document.querySelector("#input-text").value;
            var alfab = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];
            var codLetra1 = 'A'.charCodeAt(0);
            var arrConvert = [];
            var str = "";
            var newArrConvert = [];
    
            for(var i = 0; i < letra.length; i++) {
                arrConvert.push(((letra.toUpperCase().charCodeAt(i) - codLetra1 + parseInt(desloc)) % (alfab.length+1)) + codLetra1); 
                str = String.fromCharCode(arrConvert[i])
                newArrConvert.push(str);
            }

            var str1 = newArrConvert.toString().toLowerCase().replace(/,/g,"");
            result.innerText = str1;

        }else{
            var desloc = document.querySelector("#desloc").value;
            var letra = document.querySelector("#input-text").value;
            var alfab = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];
            var codLetra1 = 'A'.charCodeAt(0);
            var arrConvert = [];
            var str = "";
            var newArrConvert = [];
    
            for(var i = 0; i < letra.length; i++) {
                arrConvert.push(((letra.toUpperCase().charCodeAt(i) - codLetra1 - parseInt(desloc)) % (alfab.length+1)) + codLetra1); 
                str = String.fromCharCode(arrConvert[i])
                newArrConvert.push(str);
            }
                    
            var str1 = newArrConvert.toString().toLowerCase().replace(/,/g,"");
            result.innerText = str1;
        }
    }else{
        alert("Valor inválido ou campos vazios!");
    }
})

var btnCod = document.querySelector(".btnCod");
var titleBtn = document.querySelector(".titleBtn");
var title = document.querySelector(".title");
var muda = true;

btnCod.addEventListener("click", () => {
   
    if(muda){
        titleBtn.innerText = 'Codificando com Base64';
        btnCod.innerText = 'Cifra de Cesar';
        muda = false;
    }else{
        titleBtn.innerText = 'Codificando com Cifra de Cesar';
        btnCod.innerText = 'Base64';
        muda = true;
    }
})