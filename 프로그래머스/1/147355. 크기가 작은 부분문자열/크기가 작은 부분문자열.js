function solution(t, p) {
    var answer = 0;
    
    for (let a = 0; a < t.length - p.length + 1; a++){
        let temp = ''
        for (let b = a; b < a + p.length; b++){
            temp += t[b]    
        }
        if (parseInt(temp) <= parseInt(p)){
            answer++
        }
    }
    
    return answer;
}