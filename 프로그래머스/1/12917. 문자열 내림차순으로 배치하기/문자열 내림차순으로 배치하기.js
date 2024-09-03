function solution(s) {
    var answer = [...s];
    let sortedStr = ''
    answer.sort()
    answer.reverse()
    answer.forEach((val)=>{
        sortedStr += val
    })
    
    return sortedStr;
}