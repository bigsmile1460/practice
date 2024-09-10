function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
}
function solution(n, m) {
    var answer = [];
    
    
    answer[0] = gcd(n,m)
    answer[1] = n * m / answer[0]
    return answer;
}