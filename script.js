const textArea=document.querySelector(".text-area");
const mensjae=document.querySelector(".mensjae");

function encriptar(stringEncriptada){
    let matrziCodigo=[["e","enter"], ["i","imes"],["a","ai"],["o","over"],["u","ufat"]];
    stringEncriptada=stringEncriptada.toLowerCase()

    for(let i=0; i<matrziCodigo.length; i++)
        if(stringEncriptada.includes(matrziCodigo[i][0])){
            stringEncriptada=stringEncriptada.replaceAll(matrziCodigo[i][0],matrziCodigo[i][1])

        }


    {

    }
    return stringEncriptada
}

