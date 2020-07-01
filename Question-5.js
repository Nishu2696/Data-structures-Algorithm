const readline=require("readline");
const inp=readline.createInterface({
    input: process.stdin
});
const userInput=[];
inp.on("line", (data)=>{
    userInput.push(data);
});
inp.on("close", () => {
    rectangle(userInput);
});
function rectangle(userInput){
    var num=userInput;
    num[1]=num[1].split(" ");
    for(var i=0;i<num[1].length;i++){
        num[1][i]=parseInt(num[1][i]);
    }
    var sum1=0;
    var sum2=0;
    for(var j=0;j<3;j++){
        sum1=sum1+num[1][j];
    }
    for(var k=num[1].length-3;k<num[1].length;k++){
        sum2=sum2+num[1][k];
    }
//    console.log(sum1,sum2);
    if(sum1 === sum2){
        console.log(1);
    }
    else{
        console.log(0);
    }
}
