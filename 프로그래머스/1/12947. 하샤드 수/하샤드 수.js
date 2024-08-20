function solution(x) {
    
    var strArr = [...String(x)]
    var num = 0;
    for (let len = 0; len < strArr.length; len++){
            num = num + parseInt(strArr[len])
    }

    if(x % num === 0){
        return true
    }
    else{
        return false
    }
    

}