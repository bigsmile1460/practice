function solution(num, k) {
    var answer = -1;
    
    var num_str = num.toString().split('');
    
    for(i = 0; i < num_str.length; i++){
        if (num_str[i] === k.toString()){
            answer = i+1;
            break;
        }
    }
    
    return answer;
}