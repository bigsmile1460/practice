function solution(num_list) {
    for (let index = 0; index < num_list.length; index++){
        if (num_list[index] < 0){
            return index
        }
    }
    return -1
}