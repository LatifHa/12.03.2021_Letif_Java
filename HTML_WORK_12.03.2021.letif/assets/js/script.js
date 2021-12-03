function RvrsStr(str){
   
    if (!str || str.length<2 || typeof str!== 'string') {
        return 'Not valid';
    }
    
    let revArr=[];

    for (let i = str.length-1; i >= 0; i--) {
        revArr.push(str[i]);
    }
    return revArr.join('');

}

console.log(RvrsStr("letif"));