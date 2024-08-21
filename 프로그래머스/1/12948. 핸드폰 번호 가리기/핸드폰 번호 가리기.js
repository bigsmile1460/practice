function solution(phone_number) {
    var answer = '';
    let star = "*".repeat(phone_number.length - 4)
    let num = phone_number.substring(phone_number.length-4)
    return star + num;
}