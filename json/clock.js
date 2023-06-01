function myfunction(num){
    
    let index1 = num.indexOf("*");
    let index2 = num.indexOf("%");
    let total = num.slice((index1)+1,index2);
    let total1 = num.slice(0,index1);
    total = total;
    total1= total1;
    total = total/100;
    final = total1 * total;
    return final;
}