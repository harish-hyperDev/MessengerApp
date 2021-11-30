/*

PSA : let arr = [ " ( ", " } ", " ] " , " { ", " ) ", " [ " ];  to   ["(", ")", "{", "}", "[", "]"]
      sort the array with pairs
     catch:  a left brace has a high priority over right brace 
      so in case of left brace "(" so we have to find it first pair ")" .

*/


let index;
let tempVal;   
var arrey = [ "(", "}", "]", "{", ")", "[" ];
// 0  1  5  10  6  9   2  4
// 0  1  10  6  9  2  4  5

console.log(arrey);

for (let k = 0; k < arrey.length; k++) 
{
  if (arrey[k] == "(") {
    index = arrey.indexOf(")");   // index = 4   =>   )
    
    tempVal = arrey[index];
    arrey[index] = arrey[k+1];
    arrey[k+1] = tempVal;
  }

  if (arrey[k] == "{") 
  {
    index = arrey.indexOf("}");   // index = 4   =>   )
    
    tempVal = arrey[index];
    arrey[index[pindex]] = arrey[k+1];
    arrey[k+1] = tempVal;
  }
  
  if (arrey[k] == "[") 
  {        // k = 5
   
    index = arrey.indexOf("]");   // index = 2   =>   )
    
    tempVal = arrey[index];
    arrey[index] = arrey[k+1];
    arrey[k+1] = tempVal;
  }
}

for (let k=0; k<arrey.length; k++) {
      
}
console.log(arrey.indexOf('undefined'));

console.log(arrey);


[ "(", "}", "]", "{", ")", "[" ];




