function solution(str1, str2) {
    let fst = [];
    let snd = [];
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    for(let i = 0; i < str1.length - 1; i++) {
        const a = str1[i] >= 'a' && str1[i] <= 'z';
        const b = str1[i+1] >= 'a' && str1[i+1] <= 'z';
        if(a && b) {
            fst.push(str1[i] + str1[i+1]);
        }
    }
    for(let i = 0; i < str2.length - 1; i++) {
        const a = str2[i] >= 'a' && str2[i] <= 'z';
        const b = str2[i+1] >= 'a' && str2[i+1] <= 'z';
        if(a && b) {
            snd.push(str2[i] + str2[i+1]);
        }
    }
    const sum = fst.length + snd.length;
    let kyo = 0;
    for(let i = 0; i < fst.length; i++) {
        if(snd.indexOf(fst[i]) !== -1) {
            snd.splice(snd.indexOf(fst[i]), 1);
            kyo++;
        }
    }
    return sum === 0 ? 65536 : parseInt((kyo / (sum - kyo)) * 65536)
}