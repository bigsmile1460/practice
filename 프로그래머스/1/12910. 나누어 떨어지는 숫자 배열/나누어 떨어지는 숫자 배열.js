function solution(arr, divisor) {
    var answer = [];
    var count = 0;
        for(var arrchk = 0; arrchk < arr.length; arrchk++)
        {
            if(arr[arrchk] % divisor == 0)
            {
                answer[count] = arr[arrchk];
                count++;
            }
            
        }
        
        if(count == 0)
        {
            answer[count] = -1;
        }
        else{
            for(var i = answer.length - 1; i > 0; i--)
            {
                for(var j = 0; j < i; j++)
                {
                    if(answer[j] > answer[j+1])
                    {
                        var temp = answer[j];
                        answer[j] = answer[j + 1];
                        answer[j + 1] = temp;
                    }
                }
            }
        }
    return answer;
}