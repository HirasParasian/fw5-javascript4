
let kata1 = "Saya Belajar Javascript"
function reverseWord(inputString) {
    let strArray = inputString.split(' '); // split setiap ada spasi
    // console.log(strArray)
    let revArr = strArray.reverse() // membalik urutan array
    // console.log(revArr)
    return revArr.join(' ') // menggabungkan kembali
}
console.log(reverseWord(kata1))
