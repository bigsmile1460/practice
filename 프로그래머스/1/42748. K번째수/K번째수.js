function solution(array, commands) {
    let answer = []
    let temp = []
    for (let len = 0; len < commands.length; len++){
        for(let cut = commands[len][0] -1; cut < commands[len][1]; cut++){
            temp.push(array[cut])
        }
        temp.sort((a, b) => a - b)
        answer.push(temp[commands[len][2]-1])
        temp = []
    }
    
    return answer;
}