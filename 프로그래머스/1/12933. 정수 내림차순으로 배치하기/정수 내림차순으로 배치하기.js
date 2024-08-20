function solution(n) {
    var answer = ""
    var arr = [...String(n)]

    arr.sort()
    arr.reverse()

    for(let len = 0; len<arr.length; len++){
        answer = answer + arr[len]
        console.log(answer)
    }
    
    return parseInt(answer);
}