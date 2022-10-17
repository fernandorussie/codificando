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

btn.addEventListener("click", function(ev) {
    ev.preventDefault();
    var input = document.querySelector("#input-text").value;
    var strr = input;
    var arr = [];
    var arr2 = "";
    var arrString = [];
    console.log(strr)
    for(var i = 0; i < strr.length; i++) {
        console.log(strr.charCodeAt(i))
        arr.push(strr.charCodeAt(i)+3)
        arr2 = String.fromCharCode(arr[i])
        arrString.push(arr2)
    }
    
    console.log(arr);
    console.log(arrString)
    // console.log(arr2.fromCharCode());  // retorna "ABC"

    var str1 = arrString.toString().replace(/,/g,"");
    var item = document.createElement('p');
    item.innerText = str1;
    result.appendChild(item);
})


