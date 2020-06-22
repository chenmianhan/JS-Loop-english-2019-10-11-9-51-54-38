const TIMES=9;
var str="";
for(var i=1;i<=TIMES;i++){
    for(var j=1;j<=i;j++){
        str+=i+"*"+j+"="+i*j;
        if(i!=j)str+=" ";
    }
    if(i!=TIMES)str+="\n";
}
console.log(str);