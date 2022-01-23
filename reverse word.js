
let kata1 = "Saya Belajar Javascript"
let kata2 = 123
function reverseWord(inputString) {
    if (typeof inputString != "string"){
        return "Harus String"
    }
    let strArray = inputString.split(' '); // split setiap ada spasi
    // console.log(strArray)
    let revArr = strArray.reverse() // membalik urutan array
    // console.log(revArr)
    return revArr.join(' ') // menggabungkan kembali
}
console.log(reverseWord(kata1))
console.log(reverseWord(kata2))
