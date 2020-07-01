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
    var result=''
    for( var j = num1.length-1 ; j>=0;j--){
        result+= num1[j]+" ";
    }
    console.log(result.trim());
}
