let string = "hello amigos"
let array = [1,2,3,4,5]
let number = 522689

function reverseNumber(number){
    
    let numberString = number.toString()
    let reversedString = reverseString(numberString)
    let finalNumber = Number(reversedString)
    
    return finalNumber
}

function reverseString(string){
    return string.split("").reverse().join("")
}

function reverseArray(array){
    return array.reverse()
}

