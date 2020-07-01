const readline=require("readline");
const inp=readline.createInterface({
    input:process.stdin
});
const userInput=[];
inp.on("line", (data) => {
    userInput.push(data);
});
inp.on("close", () => {
    swap(userInput);
});
function swap(data){
    var value=userInput;
    var num0=value[0].split(" ");
    var num1=value[1].split(" ");
    for(var a=0;a<num1.length;a++){
        num1[a]=parseInt(num1[a]);
    }
    for(var b=0;b<num0.length;b++){
        num0[b]=parseInt(num0[b]);
    }
    var count=0
    for(var i=0;i<num1.length;i++){
        if(num0[1] === num1[i]){
            count=count+1;
            break;
        }
    }
    if(count === 1){
        console.log("yes");
    }
    else{
        console.log("no");
    }
}
