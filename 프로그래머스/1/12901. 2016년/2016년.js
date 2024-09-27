function solution(a, b) {
    let answer = '';
    
    let todays = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
    let daysNum = ["0", "31", "29", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"]
    
    let days = b + 4
    
    for(let months = 0; months < a; months++){
        days = days + parseInt(daysNum[months])
        console.log("for문")
    }
    console.log(days)
    days %= 7
    return todays[days];
}