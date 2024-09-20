function solution(s) {
    var answer = [];
    var str = s.split('')
    var temp = []
    str.forEach((val,idx) => {
        answer.push(temp.lastIndexOf(val) !== -1 ? idx - temp.lastIndexOf(val) : temp.lastIndexOf(val))
        temp.push(val)
    })
    return answer;
}