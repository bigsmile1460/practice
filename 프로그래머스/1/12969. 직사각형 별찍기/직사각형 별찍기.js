process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let star = "*".repeat(a)
    for(let y=0; y<b; y++){
        console.log(star);
    }    
    
});