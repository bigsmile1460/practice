function solution(s) {
    var answer = '';

    if (s.length % 2 === 1){
        return s[parseInt(s.length / 2)]
    }
    else{
        return s[s.length / 2 - 1] + s[s.length / 2]
    }
}