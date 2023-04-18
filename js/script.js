let textAreaMain = document.querySelector(".textareaa")
let textareaSecond = document.querySelector(".textarea2")  
const button1 = document.querySelector(".button-one")
const button2 = document.querySelector(".button-two")
const button3 = document.querySelector(".button-three")
const textosCriptografado = document.querySelector(".texto-criptografado")  
const textoSemConteudo = document.querySelector(".sem-conteudo")

let caracteresCodigosCripto = {'a': 'ai', 'e': 'enter', 'i': 'imes', 'o': 'ober', 'u': 'ufat'};

 function criptografar(valueString) {
    let retornaChar = "";
    for (let i = 0; i < valueString.length; i++) {
      const char = valueString.charAt(i).toLowerCase();
      if (caracteresCodigosCripto[char]) {
        retornaChar += caracteresCodigosCripto[char];
      } else {
        retornaChar += char;
      }
    }
    return retornaChar;
  }

function descriptografar(valueString) {
    let retornaChar = "";
    let i = 0;
    while (i < valueString.length) {
      let found = false;
      for (const [key, value] of Object.entries(caracteresCodigosCripto)) {
        if (valueString.startsWith(value, i)) {
            retornaChar += key;
          i += value.length;
          found = true;
          break;
        }
      }
      if (!found) {
        retornaChar += valueString.charAt(i);
        i++;
      }
    }
    return retornaChar;
  }


function copy(texto) {
    navigator.clipboard.writeText(texto).then(() => {
        button3.innerHTML = "Copiado"
        setTimeout(() => button3.innerHTML = "Copiar", 1000)
    }).catch(() => alert("Failed to copy the color code !"))
}



button1.addEventListener("click", ()=>{
    textareaSecond.value = textAreaMain.value
    if(textareaSecond.value == ""){
        textoSemConteudo.classList.remove("none")
        // textosCriptografado.classList.remove("com")
    }else{
        let palavras = criptografar(textAreaMain.value)
        textareaSecond.value = palavras
        textosCriptografado.classList.add("com")
        textoSemConteudo.classList.add("none")
    }
})

button2.addEventListener("click", ()=>{
    textareaSecond.value = textAreaMain.value
    if(textareaSecond.value == ""){
        textoSemConteudo.classList.remove("none")
    }else{
       let palavra = descriptografar(textareaSecond.value)
        textareaSecond.value = palavra
        textosCriptografado.classList.add("com")
        textoSemConteudo.classList.add("none")
    }
})

button3.addEventListener("click", ()=>{
    copy(textareaSecond.value)
})

