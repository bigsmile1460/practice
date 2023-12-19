function solution(my_string, letter) {
    var answer = '';
    var regexp = new RegExp(letter, "g");
    answer = my_string.replace(regexp, '');
    return answer;
}