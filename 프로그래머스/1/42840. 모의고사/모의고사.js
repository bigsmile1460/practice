function solution(answers) {
    let one = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
    let two = [2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5]
    let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    let scores = [0,0,0]
    
    answers.forEach((val, idx) => {
        if(one[idx % one.length] === val){
            scores[0] += 1
        }
        if(two[idx % two.length] === val){
            scores[1] += 1
        }
        if(three[idx % three.length] === val){
            scores[2] += 1
        }
    })
    
    let maximam = Math.max(...scores);
    let answer = []
    
    scores.forEach((val, idx) =>{
        if (maximam === val) {
            answer.push(idx + 1)
        }
    })
    return answer;
}