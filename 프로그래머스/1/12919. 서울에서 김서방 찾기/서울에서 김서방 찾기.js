function solution(seoul) {
    var answer = '';
    for (let len = 0; len < seoul.length; len++){
        if (seoul[len] === "Kim"){
            return "김서방은 " + len +"에 있다"
        }
    }
}