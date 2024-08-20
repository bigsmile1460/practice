function solution(n) {

    var temp = Math.sqrt(n)
    
    if (temp % 1 === 0){
        return (temp+1) ** 2
    }
    else {
        return -1
    }
}