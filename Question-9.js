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
    var num0=num[0].split(" ");
    for(var b=0;b<num0.length;b++){
        num0[b]=parseInt(num0[b]);
    }
    var num1=num[1].split(" ");
    for(var i=0;i<num1.length;i++){
        num1[i]=parseInt(num1[i]);
    }
    var temp;
    for(var j=0;j<num1.length;j++){
        for(var k=j+1;k<num1.length;k++){
            if(num1[j]>num1[k]){
                temp=num1[j];
                num1[j]=num1[k];
                num1[k]=temp;
            }
        }
    }
//    console.log(num1);
    var unique=Array.from(new Set(num1));
//    console.log(unique);
    if((unique.length) >= num0[1]){
        console.log(unique[(num0[1])-1]);
    }
    else{
        console.log(-1);
    }
}
