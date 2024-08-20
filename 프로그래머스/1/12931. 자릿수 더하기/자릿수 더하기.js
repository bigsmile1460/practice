function solution(n)
{
    var answer = 0;
    var temp = String(n)
    for (let len=0; len < temp.length; len++){
        answer += parseInt(temp[len])
    }

    return answer;
}