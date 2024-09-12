function solution(sizes) {
    let x = []
    let y = []
    
    for (let a = 0; a < sizes.length; a++){
        if (sizes[a][0] > sizes[a][1]){
            x.push(sizes[a][0])
            y.push(sizes[a][1])
        }
        else{
            y.push(sizes[a][0])
            x.push(sizes[a][1])
        }
    }
    
    let w = Math.max(...x)
    let h = Math.max(...y)
    console.log(w)
    console.log(h)
    return w*h;
}