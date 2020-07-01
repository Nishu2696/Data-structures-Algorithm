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
    var num1= parseInt(value[1]);
    // console.log(num1);
    var value1 = value[0].split("");
    // console.log(value1);
    var temp;
    for( var i = 0; i < num1; i++){
        for(var j = 1; j < value1.length; j++ ){
            temp = value1[0];
            value1[0] = value1[j];
            value1[j] = temp;
        }
        // console.log(value1);
    }
    // console.log(value1);
    var result=''
    for(var j= 0; j < value1.length; j++){
        result+= value1[j]+"";
        // console.log(value[j]);
    }
    console.log(result.trim());
}
