function solution(arr) {
    let temp = [arr[0], 0];

    if (arr.length === 1){
        return [-1]
    }
    else{
        arr.forEach((val, idx)=>{
            if (temp[0] > val){
                temp[0] = val
                temp[1] = idx
            }
        })
        
        arr.splice(temp[1], 1);
    
        return arr;
    }
    
}