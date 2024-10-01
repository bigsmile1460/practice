function solution(k, m, score) {
    var box = score
    var answer = 0
    var boxInApple = []
    box.sort(function (a,b) {return a-b})
    
    while (box.length >= m){
        boxInApple = []
        for (let apple = box.length-1; apple > box.length-m-1; apple--){
            boxInApple.push(box[apple])
        }

        for (let apple = 0; apple < m; apple++){

            box.pop()
        }

        answer += m * Math.min(...boxInApple)

    }
    return answer;
}