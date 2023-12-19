function solution(n, control) {
    let strLen = control.length

    for (let word = 0; word < strLen; word++){
        switch (control[word]){
            case "w":
                n = n + 1
                break
            case "s":
                n = n - 1
                break
            case "d":
                n = n + 10
                break
            case "a":
                n = n - 10
                break
            default:
                break
        }
    }
    return n
}