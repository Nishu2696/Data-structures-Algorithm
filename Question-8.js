const readline=require("readline");
const inp=readline.createInterface({
    input:process.stdin
});
inp.on("line", (data) =>{
    prime(data)
});
function prime(data){
    var value = data.split(" ");
    // console.log(value);
    var result=''
    for(var j= value.length-1; j>=0; j--){
        result+= value[j]+" ";
        // console.log(value[j]);
    }
    console.log(result.trim());
}
