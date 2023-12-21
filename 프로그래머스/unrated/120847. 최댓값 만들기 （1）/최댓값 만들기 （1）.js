function solution(numbers) {
    numbers.sort(function(a,b){return a-b})
    
    let num1 = numbers[numbers.length-2]
    let num2 = numbers[numbers.length-1]

    
    return num1 * num2;
}