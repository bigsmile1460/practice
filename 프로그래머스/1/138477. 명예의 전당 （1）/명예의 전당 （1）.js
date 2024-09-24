function solution(k, score) {
    var presentation = []
    var honor = []
    for (let today = 0; today < score.length; today++){
        honor.push(score[today])
        honor.sort((a,b)=>b-a)
        
        if (honor.length === k + 1){
            honor.pop()
        }
        
        presentation.push(Math.min(...honor))
    }
    return presentation;
}