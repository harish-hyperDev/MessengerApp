var arr=[100,10000,200,500];
var big = arr[2];
var jaamkay=1;


for (var i=0; i<arr.length; i++) {
    if (big < arr[i])
        big = arr[i];    
}

console.log(big);


