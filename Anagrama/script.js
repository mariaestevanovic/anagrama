function verificarRepetidas(array) {
    naoRepete = []
    repetidas = []
    for(let c = 0; c < array.length; c++) {
        let letra =array[c]
        var contadorNenhumRepetida = 0
        for(let c2 = 0; c2 < array.length; c2++) {
            if (letra == naoRepete[c2]){
                repetidas = repetidas.concat(letra)
                break
            } if (letra != naoRepete[c2]) {
                contadorNenhumRepetida++
                if (contadorNenhumRepetida >= (array.length - 1)) {
                    naoRepete = naoRepete.concat(letra)
                    break
                }
                
            } 
        }
    
    }
    
    return {naoRepete:naoRepete, repetidas:repetidas}
}


function fatorial (n) {
    let fatorial = 1
    while (n > 0) {
        fatorial *= n
        n--
    }
    return fatorial
}


function nenhumaRepetida(array) {
    const repete = verificarRepetidas(array)
    let teste = []
    if (repete.repetidas.length == 0) {
        let resultado = fatorial(array.length)
        return resultado
    } else {
        return false
    }
   
}


function comRepetiodos(array) {
    const repete = verificarRepetidas(array)
    let fatorialCima = fatorial(array.length)
    let fatorialBaixo = 1
    const alfabetico = repete.repetidas.sort()
    c = 0
    while (c < alfabetico.length) {
        let letra = alfabetico[0]
        let c2 = 1
        while (true) {
            if (letra == alfabetico[0]) {
                c2 ++
                alfabetico.shift()
            } else {
                break
            }
        }
        try {
            fatorialBaixo *= fatorial(c2)
        } catch(e) {
            break
        }
        
    }
    let resultado = fatorialCima / fatorialBaixo
    return resultado


}


function anagramas(palavra) {
    const repeteOuNao = verificarRepetidas(palavra)
    if (repeteOuNao.repetidas.length == 0) {
        var r = nenhumaRepetida(palavra)
    } else {
        var r = comRepetiodos(palavra)
    }

    return r
}

function mostrarAnagramas() {
    var mostrar = document.getElementById('mostrar')
    var usuario = document.getElementById('num')
    var palavraUsuario = String(usuario.value)
    palavraUsuario = palavraUsuario.toLowerCase()//todas as letras iguais (tamanho)
    palavraArray = palavraUsuario.split('')// '' faz um array quebrando a cada palavra

    const resulado = anagramas(palavraUsuario)
    mostrar.innerHTML = `A Palavra ${palavraUsuario} tem:<br>
    ${resulado} Anagramas`




}


