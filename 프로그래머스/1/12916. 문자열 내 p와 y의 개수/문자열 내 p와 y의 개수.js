function solution(s){
    var answer = true;
    var str = s.toLowerCase()
    var p_num = 0
    var y_num = 0
    for(var a=0; a<str.length; a++){
        if (str[a] === 'p'){
            p_num++
        }
        if (str[a] === 'y'){
            y_num++
        }
    }
    if (p_num === y_num){
        return true
    }
    else{
        return false
    }
    
}