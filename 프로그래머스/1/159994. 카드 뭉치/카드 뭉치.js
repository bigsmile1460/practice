function solution(cards1, cards2, goal) {
    var answer = '';
    
    let chk1 = 0
    let chk2 = 0
    for (let words = 0; words < goal.length; words++){
        if (goal[words] === cards1[chk1]){
            chk1++
        }
        else if (goal[words] === cards2[chk2]){
            chk2++
        }
        else{
            return "No"
        }
    }
    return "Yes";
}