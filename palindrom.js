
let kata1 = "Hiras"
let kata2 = 123
let kata3 = "Sop Pos"

function checkPalindrome(inputString) {
    if (typeof inputString != "string"){
        return "Harus String"
    }
    let strArray = inputString.toLowerCase().split(''); // merubah kata menjadi lower case dan split per huruf
    // console.log(strArray)
    let newArr = strArray.join(''); //menggabungkan kata
    // console.log(newArr)
    let revArr =  [...newArr].reverse().join('') //mengambil data newArr dan melakukan reverse lalu join
    // console.log(revArr)
    if ( newArr === revArr) {
        return "Palindrom";
    } else {
        return "Bukan Palindrom";
    }
}

console.log(checkPalindrome(kata1))
console.log(checkPalindrome(kata2))
console.log(checkPalindrome(kata3))