let numbers = [1,2,3,4,5,6,7,8,9,0]
let lowerCase = ['a','b','c','d','e','f','g','h','i','j','k']
let upperCase = ['A','B','C','D','E','F','G','H','I','J','K']
let specials = ['!','#','@','$']


document.getElementById("customRange1").oninput = function () {
    let passLength = document.getElementById("password-length")
    passLength.innerHTML = this.value;
}

document.getElementById("generator").onclick = generatePass;

 function generatePass () {
    let total = [];
    if(document.getElementById("flexCheckDefault1").checked){
        total = [...total,...numbers]
    }
    if(document.getElementById("flexCheckDefault2").checked){
        total = [...total,...lowerCase]
    }
    if(document.getElementById("flexCheckDefault3").checked){
        total = [...total,...upperCase]
    }
    if(document.getElementById("flexCheckDefault4").checked){
        total = [...total,...specials]
    }
    total.sort(compareRandom)
    //console.log(total)

    let password = ""
    passwordLength = document.getElementById("customRange1").value
    for(let i=0; i < passwordLength; i++) {
        password += total[randomInteger(0, total.length-1)]
    }
    //console.log(password)
    document.getElementById("result").value = password;
    
    
}

function compareRandom (a,b) {
    return Math.random() - 0.5;
}

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
