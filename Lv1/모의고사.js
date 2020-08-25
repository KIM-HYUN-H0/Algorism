function solution(answers) {
    let answer = [0,0,0];
    let result = [];
    let one = [1,2,3,4,5];
    let two = [2,1,2,3,2,4,2,5];
    let three = [3,3,1,1,2,2,4,4,5,5];

    for(let i = 0; i < answers.length; i++) {
        if(answers[i] === one[i % one.length]) { answer[0]++; }
        if(answers[i] === two[i % two.length]) { answer[1]++; }
        if(answers[i] === three[i % three.length]) { answer[2]++; }
    }
    const max = Math.max(...answer);
    for(let i = 0; i < answer.length; i++) {
        if(answer[i] === max) { result.push(i + 1)}
    }
    return result
}