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
var form = document.querySelector(".form")
var codific = document.querySelector('#codificar');


btn.addEventListener("click", function(ev) {
    if(form.checkValidity()){
        if(codific == 'codificar'){
            console.log(form.change.value)
            ev.preventDefault();
        
            var desloc = document.querySelector("#desloc").value;
            var letra = document.querySelector("#input-text").value;
            var alfab = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];
            var codLetra1 = 'A'.charCodeAt(0)
            var arrConvert = [];
            var str = "";
            var newArrConvert = [];
        
            console.log("\n")
            console.log(`Tamanho do array de alfabeto ${alfab.length}`)
            console.log(`Letra digitada: ${letra}`)
            console.log(`Posição da letra digitada ${letra.charCodeAt(0)}`)
            console.log(`Posição da primeira letra do alfabeto: A = ${codLetra1}`)
            console.log("\n")
            for(var i = 0; i < letra.length; i++) {
                arrConvert.push(((letra.charCodeAt(i) - codLetra1 + parseInt(desloc)) % (alfab.length+1)) + codLetra1); 
                str = String.fromCharCode(arrConvert[i])
                newArrConvert.push(str)
                
                console.log(`Codigo convertido da letra digitada: ${arrConvert[i]}`)
                console.log(`Teste de conta: ${(((letra.charCodeAt(i)-codLetra1)+ parseInt(desloc)) % alfab.length) + codLetra1}`)
                console.log(`Letra convertida após o calculo ${str}`);
            }
            
            // console.log(arr2.fromCharCode());  // retorna "ABC"
        
            var str1 = newArrConvert.toString().replace(/,/g,"");
            var item = document.createElement('p');
            item.innerText = str1;
            result.appendChild(item);
        }else if(decodific == 'decodificar'){
            console.log('decodificar selecionado')
        }
    }else{
        alert("Campos vazios ou invalidos!")
    }
})


