function cantidadPalabras(parrafo){
    let diccionario = {}
    parrafo = parrafo.toLowerCase().split(" ")
    
    for (let palabra of parrafo){
        if(diccionario.hasOwnProperty(palabra)){
            diccionario[palabra] +=  + 1 
        }else{
            diccionario[palabra] = 1
        }
    }
    return diccionario
}

let parrafo = "lorem ipsum opdm opening alom maroon 5 2 3 amigos malos malos Lorem"

console.log(cantidadPalabras(parrafo));




