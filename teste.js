
var btn = document.querySelector("#btn");
var result = document.querySelector("#result");
var form = document.querySelector(".form");


btn.addEventListener("click", function(ev) {
    var radio = document.querySelector('input[name="change"]:checked').value;
    if(form.checkValidity()){
        console.log(radio)
        ev.preventDefault();
        
        if(radio === "true"){
            var desloc = document.querySelector("#desloc").value;
            var letra = document.querySelector("#input-text").value;
            var alfab = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];
            var codLetra1 = 'A'.charCodeAt(0);
            var arrConvert = [];
            var str = "";
            var newArrConvert = [];
        
            console.log("\n");
            console.log(`Tamanho do array de alfabeto ${alfab.length}`);
            console.log(`Letra digitada: ${letra}`);
            console.log(`Posição da letra digitada ${letra.charCodeAt(0)}`);
            console.log(`Posição da primeira letra do alfabeto: A = ${codLetra1}`);
            console.log("\n");
    
            for(var i = 0; i < letra.length; i++) {
                arrConvert.push(((letra.toUpperCase().charCodeAt(i) - codLetra1 + parseInt(desloc)) % (alfab.length+1)) + codLetra1); 
                str = String.fromCharCode(arrConvert[i])
                newArrConvert.push(str);
                
                console.log(`Codigo convertido da letra digitada: ${arrConvert[i]}`);
                console.log(`Teste de conta: ${(((letra.charCodeAt(i)-codLetra1)+ parseInt(desloc)) % alfab.length) + codLetra1}`);
                console.log(`Letra convertida após o calculo ${str}`);
            }
            
            // console.log(arr2.fromCharCode());  // retorna "ABC"
        
            var str1 = newArrConvert.toString().toLowerCase().replace(/,/g,"");
            var item = document.createElement('p');
            item.innerText = str1;
            result.appendChild(item);
        }else{
            var desloc = document.querySelector("#desloc").value;
            var letra = document.querySelector("#input-text").value;
            var alfab = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];
            var codLetra1 = 'A'.charCodeAt(0);
            var arrConvert = [];
            var str = "";
            var newArrConvert = [];
        
            console.log("\n");
            console.log(`Tamanho do array de alfabeto ${alfab.length}`);
            console.log(`Letra digitada: ${letra}`);
            console.log(`Posição da letra digitada ${letra.charCodeAt(0)}`);
            console.log(`Posição da primeira letra do alfabeto: A = ${codLetra1}`);
            console.log("\n");
    
            for(var i = 0; i < letra.length; i++) {
                arrConvert.push(((letra.toUpperCase().charCodeAt(i) - codLetra1 - parseInt(desloc)) % (alfab.length+1)) + codLetra1); 
                str = String.fromCharCode(arrConvert[i])
                newArrConvert.push(str);
                
                console.log(`Codigo convertido da letra digitada: ${arrConvert[i]}`);
                console.log(`Teste de conta: ${(((letra.charCodeAt(i)-codLetra1)+ parseInt(desloc)) % alfab.length) + codLetra1}`);
                console.log(`Letra convertida após o calculo ${str}`);
            }
            
            // console.log(arr2.fromCharCode());  // retorna "ABC"
        
            var str1 = newArrConvert.toString().toLowerCase().replace(/,/g,"");
            var item = document.createElement('p');
            item.innerText = str1;
            result.appendChild(item);
        }
    }else{
        alert("Valor inválido ou campos vazios!");
    }

    // console.log(arr);
    // console.log(arrString)
    // console.log(arr2.fromCharCode());  // retorna "ABC"

    // var str1 = arrString.toString().replace(/,/g,"");
    // var item = document.createElement('p');
    // item.innerText = str1;
    // result.appendChild(item);
})

function mudaStatus(status){
    if(status == true){
        status = false;
    }else{
        status = true
    }
}


var btnCod = document.querySelector(".btnCod");
var titleBtn = document.querySelector(".titleBtn");
var muda = true;

btnCod.addEventListener("click", () => {
   
    if(muda){
    titleBtn.innerText = 'Codificar com Cifra de Cesar';
    btnCod.innerText = 'Cifra de Cesar';
    muda = false;
    }else{
        titleBtn.innerText = 'Codificar com Base64';
        btnCod.innerText = 'Base64';
        muda = true;
    }
})
