function solution(absolutes, signs) {
    var answer = 0;
    
    for (var a = 0; a<absolutes.length; a++){
        if (signs[a] === true){
            answer = answer + absolutes[a]    
        }
        else{
            answer = answer + absolutes[a] * -1
        }
        
    }
    return answer;
}