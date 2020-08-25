function solution(n, works) {
    let answer = 0;
    works.sort((a,b) => b-a);
    let max = works[0];
    while(n > 0) {
        if(max === 0) { return 0}
        for(let i = 0; i < works.length; i++) {
            if(n === 0) break;
            if(max === works[i] ) {
                works[i]--;
                n--;
            }
        }
        max--;
        
    }
    
    works.map(data => { answer += Math.pow(data,2)})
    return answer;
}