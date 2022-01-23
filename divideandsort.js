
function divedeAndSort(inputString) {
    let hasil = ""
    let array2 = inputString.toString()
    let strArray = array2.split('0'); // split setiap ada 0
    for (let i = 0; i < strArray.length; i++) { //perulangan
        let splitArray = strArray[i].split('')  //split array per index
        let sortArray= splitArray.sort() //sort array per index
        let joinArray= sortArray.join('') // join array per index
        hasil = hasil + joinArray //menggabungkan
    }   
    return hasil 
}
console.log(divedeAndSort(5956560159466056))
