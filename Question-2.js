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
    // var num=data.split(" ");
    for(var i=1;i<num1.length;i++){
        num1[i]=parseInt(num1[i]);
    }
//    console.log(num);
    // var num1=[];
    // for(var j=1;j<num.length;j++){
    //     num1.push(num[j]);
    // }
    // console.log(num1);
//    var small=[];
    var large=[];
    
//    console.log(small);
    for(var a=0;a<num1.length;a++){
        for(var b=a+1;b<num1.length;b++){
            if(num1[a]<num1[b]){
                temp=num1[a];
                num1[a]=num1[b];
                num1[b]=temp;
            }
        }
        large.push(num1[a]);
    }
//    console.log(large);
    for(var c=0, d=(large.length-1);c<d;c++){
        c=c+1;
        large.splice(c,0,large[d]);
        large.pop();
        // console.log(large);
    }
//    console.log(large);
    var result="";
    for(var q=0;q<large.length;q++){
        result+=large[q]+" ";
    }
    console.log(result.trim());
}
