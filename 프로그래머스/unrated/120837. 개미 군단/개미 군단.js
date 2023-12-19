function solution(hp) {
    var answer = 0;
    var 장군개미 = 0;
    var 병정개미 = 0;
    var 일개미 = 0;
    
    장군개미 = parseInt(hp / 5);
    hp = hp % 5;
    병정개미 = parseInt(hp / 3);
    hp = hp % 3;
    일개미 = hp;
    
    answer = 장군개미 + 병정개미 + 일개미;
    
    return answer;
}