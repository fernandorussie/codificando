var btn = document.querySelector("#btn");
var result = document.querySelector("#result");
var form = document.querySelector("form");
var codVerificador = 1;

function CopyText() {
    var content = document.getElementById('result').innerHTML;
    navigator.clipboard.writeText(content);
    var modal = setInterval(function() {document.querySelector(".modal").style.display = "initial"},1);
    setTimeout(function(){
        document.querySelector(".modal").style.display = "none";
        clearInterval(modal);
    },3000)
    
}
function SetCesar(){ 
    codVerificador = 1;
    document.querySelector("#cifracesar").style.backgroundColor = 'white';
    document.querySelector("#cifracesar").style.color = '#4433ff';
    document.querySelector("#base64").style.backgroundColor = '#4433ff';
    document.querySelector("#base64").style.color = 'white';
    document.querySelector("#desloc").style.display = 'initial';
    document.querySelector("#desloc").setAttribute("required")
    document.querySelector("#input-text").value = '';
    document.querySelector("#input-text") = '';
    document.querySelector("#result") = '';
}
function SetBase64(){
    codVerificador = 2;
    document.querySelector("#base64").style.backgroundColor = 'white';
    document.querySelector("#base64").style.color = '#4433ff';
    document.querySelector("#cifracesar").style.backgroundColor = '#4433ff';
    document.querySelector("#cifracesar").style.color = 'white';
    document.querySelector("#desloc").style.display = 'none';
    document.querySelector("#desloc").removeAttribute("required");
    document.querySelector("#input-text").value = '';
    document.querySelector("#input-text") = '';
    document.querySelector("#result") = ''; 
}

function SetCodificar(){
    document.querySelector("#labelCodificar").style.backgroundColor = '#4433ff';
    document.querySelector("#labelCodificar").style.color = 'white';
    document.querySelector("#labelDecodificar").style.backgroundColor = 'white';
    document.querySelector("#labelDecodificar").style.color = '#4433ff';
}
function SetDecodificar(){
    document.querySelector("#labelCodificar").style.backgroundColor = 'white';
    document.querySelector("#labelCodificar").style.color = '#4433ff';
    document.querySelector("#labelDecodificar").style.backgroundColor = '#4433ff';
    document.querySelector("#labelDecodificar").style.color = 'white';
}

btn.addEventListener("click", function(ev) {
    if(codVerificador == 1){
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
                document.querySelector("#input-text").value = '';
    
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
                document.querySelector("#input-text").value = '';
            }
        }else{
            alert("Valor inválido ou campos vazios!");
        }
    }else{
        var radio = document.querySelector('input[name="change"]:checked').value;
        if(form.checkValidity()){
            ev.preventDefault();
            
            if(radio === "true"){
                var letra = document.querySelector("#input-text").value;
                var dadoCodificado = window.btoa(letra);
                
                result.innerText = dadoCodificado;
                document.querySelector("#input-text").value = '';
            }else{
                var letra = document.querySelector("#input-text").value;
                var dadoDecodificado = window.atob(letra);
                
                result.innerText = dadoDecodificado;
                document.querySelector("#input-text").value = '';
            }
        }else{
            alert("Valor inválido ou campos vazios!");
        }
    }
})