/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
var minNumberOfFrogs = function (croakOfFrogs) {
    let croaktemp = croakOfFrogs.replace(/kcroak/g, "k")
    if (croaktemp.length === 0) return 1
    if(croakOfFrogs.length%5) return -1
    const croakArr = croaktemp.split('')
    let wrapper = []
    let num = 0
    let lackR = 0
    let lackO = 0
    let lackA = 0
    let lackK = 0
    let wrapperCroak = []
    let i = 0
    let res = 0
    let k = 0
    while (croakArr.length >= i) {
        if (croakArr[i] == "c") {
            if(wrapperCroak.length!==0){
                k++
                wrapperCroak.shift()
            }
            wrapper[num] = []
            if (wrapper[num].length !== 0) {
                res = -1
                return res
            }
            wrapper[num].push("c")
            num++
        }
        // console.log(wrapper)
        if (croakArr[i] == "r") {
            if (!wrapper[lackR] || wrapper[lackR].length !== 1) {
                res = -1
                return res
            }
            wrapper[lackR].push("r")
            lackR++
        }
        if (croakArr[i] == "o") {
            if (!wrapper[lackO] || wrapper[lackO].length !== 2) {
                res = -1
                return res
            }
            wrapper[lackO].push("o")
            lackO++
        }
        if (croakArr[i] == "a") {
            if (!wrapper[lackA] || wrapper[lackA].length !== 3) {
                res = -1
                return res
            }
            wrapper[lackA].push("a")
            lackA++
        }
        if (croakArr[i] == "k") {
            if (!wrapper[lackK] || wrapper[lackK].length !== 4) {
                res = -1
                return res
            }
            wrapper[lackK].push("k")
            wrapperCroak.push(lackK)
            lackK++
        }
        i++
    }

    return res == -1 ? -1 : wrapper.length-k
};