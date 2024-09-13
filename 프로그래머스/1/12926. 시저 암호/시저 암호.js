function solution(s, n) {
    var answer = s.split('');
    let shifting = ""
    let gap
    answer.forEach((val)=>{
        if (val.charCodeAt() >= 65 && val.charCodeAt() <= 90){
            gap = (val.charCodeAt() - 65 + n) % 26
            shifting += String.fromCharCode(65 + gap)
        }
        else if (val.charCodeAt() >= 97 && val.charCodeAt() <= 122){
            gap = (val.charCodeAt() - 97 + n) % 26
            shifting += String.fromCharCode(97 + gap)
        }
        else{
            shifting += ' '
        }
        
    })
    
    return shifting;
}