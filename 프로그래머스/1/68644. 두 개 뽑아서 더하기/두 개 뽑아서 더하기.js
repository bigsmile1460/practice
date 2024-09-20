function solution(numbers) {
    var answer = [];
    numbers.sort()
    
    numbers.forEach((val,idx) => {
        for(let len = idx+1; len < numbers.length; len++){
            answer.push(val+numbers[len])
        }
    })
    const set = new Set(answer);

    const uniqueArr = [...set];
    uniqueArr.sort((a,b)=> a-b)
    return uniqueArr;
}