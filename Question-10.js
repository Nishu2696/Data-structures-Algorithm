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
    var result='';
    for(var j = 0; j < num1.length; j++){
        if( j == num1.length-1){
            result+=-1+" ";
            continue;
        }
        for(var k=j+1; k < num1.length; k++){
            if(num1[j] > num1[k]){
                result+=num1[k]+" ";
                break;
            }
            else if( k == num1.length-1){
                result+=-1+" ";
                break;
            }
        }
    }
    // var result=''
    // for( var j = num1.length-1 ; j>=0;j--){
    //     result+= num1[j]+" ";
    // }
    console.log(result.trim());
}
