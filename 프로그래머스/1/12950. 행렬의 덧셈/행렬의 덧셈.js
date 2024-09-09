function solution(arr1, arr2) {
    var answer = arr1;
    
    for(let x = 0; x<arr1.length; x++)
    {
        for(let y = 0; y<arr1[x].length; y++)
        {
            answer[x][y] = arr1[x][y] + arr2[x][y];
        }

    }
    
    return answer;
}