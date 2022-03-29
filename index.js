// code your solution here
function superbowlWin(record){
    function isWinningYear(year){
        if(year.result === "W"){
        return true
    } else {
        return false
    }
}

const winningYearObject = record.find(isWinningYear) 

if (winningYearObject){
    return winningYearObject.year
}

}















/*function superbowlWin(record) {
    function isWinningYear(year) {
        if(year.result === "W")
        return true
    } else {
        return false
    }
}
record.find(isWinningYear)
const isWinningYear = record.find(isWinningYear)
if(isWinningYear) {
    return isWinningYearObject.isWinningYear
}
*/
