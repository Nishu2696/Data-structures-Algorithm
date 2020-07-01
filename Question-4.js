const readline=require("readline");
const inp=readline.createInterface({
    input:process.stdin
});
const userInput=[];
inp.on("line", (data) => {
    userInput.push(data);
});
inp.on("close", () => {
    ascending(userInput);
});
function ascending(userInput){
    var num=userInput;
    var num1=num[1].split(" ");
    for(var i=0;i<num1.length;i++){
        num1[i]=parseInt(num1[i]);
    }
    // console.log(num1);
    var temp;
    for(var a = 0; a < num1.length; a++){
        for( var b = a+1; b < num1.length; b++){
            if (num1[a] > num1[b]){
                temp = num1[a];
                num1[a] = num1[b];
                num1[b] =temp;
            }
        }
    }
    // console.log(num1);
    var k=1;
    for( var j = 0;j< num1.length; j++ ){
        if( (j == num1.length -1) && ( (num1[j] - num1[j-1]) == 1)){
            // k = k+1;
            break;
        }
        else if( (num1[j + 1] - num1[j]) == 1){
            k =k+1;
            continue;
        }
    }
    console.log(k);
    // var result=''
    // for( var j = num1.length-1 ; j>=0;j--){
    //     result+= num1[j]+" ";
    // }
    // console.log(result.trim());
}
