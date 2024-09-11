function solution(s) {
    var answer = s.split(' ');
    var str = ''
    var str2 = ''
    answer.forEach((val1,idx1)=>{
        str = val1.split('')
        
        str.forEach((val2, idx2)=>{
            if (idx2 % 2 === 0){
                str2 += val2.toUpperCase()
            }
            else{
                str2 += val2.toLowerCase()
            }
        })
        str2 += ' '
        
        
    })
    return str2.slice(0, -1);
}