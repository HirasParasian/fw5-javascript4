
function divedeAndSort(inputNumber) {
    if (typeof inputNumber != "number"){
        return "Harus Angka"
    }
    let hasil = ""
    let array = inputNumber.toString() //convert ke string
    let strArray = array.split('0'); // split setiap ada 0
    for (let i = 0; i < strArray.length; i++) { //perulangan
        let splitArray = strArray[i].split('')  //split array per index
        // console.log(splitArray)
        let sortArray= splitArray.sort() //sort array per index
        // console.log(sortArray)
        let joinArray= sortArray.join('') // join array per index
        // console.log(joinArray)
        hasil = hasil + joinArray //menggabungkan
    }   
    return Number(hasil) //convert ke number 
}
console.log(divedeAndSort(5956560159466056))
console.log(divedeAndSort("5956560159466056"))
