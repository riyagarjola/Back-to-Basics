//Functions
//es5 and es6
/*es5->1.function statements
       2.function expressions
       3.anonymous function
*/
/*es6->fat arrow function->1.basic fat arrow
                           2.fat arrow with one param 
                           3.fat arrow with implicit return*/

/*functions - js m functions normal programming language jese nhi hote h , yaha pr js m function bnane k liye type nhi bnana padta, bs funvtion 
keyword likhna padega and give it a name also*/
/*
function abcd(~param){
}
*/
/*js m functions ko first class functions ka darja diya gaya h, jiska mtlv h ki js m functions ko value/variables ki tarah treat kiya jata h */
/*
function abcd(){
var i=12;
console.log(i)
for(var b=12;b<22;b++){
console.log("hello")
}
 }

abcd(); */ 
/*function abcd(val){
    console.log(12+val)
}
abcd(12);*/

/*function abcd(){
   //Function Statement
}*/ 

/*var abcd=function(){
   //Function Expression
}*/

/*function(){
    //Anonymous Function
}*/

//Fat Arrow
/*var a = ()=>{};
var b=()=>{
    
}
var c=()=>{
    
}*/
//Fat arrow with one parameter
/*var g = (ab)=>{}
    
g(12)*/ 

//Implicit Return 
/*var abcd = ()=>"harsh"
abcd()*/

//return ka matlab hua,jaha par bhi return lgega uske aage jo bhi likhoge wo jaayega jaha pr function call hua tha,return function k under lgta h
/*function abcd(){
    return 12;
}
console.log(abcd());*/

//if return no value then --> undefined
//asa function jo kuch return nhi krta vo bhi undefined return krta h.

//Fat arrow Example
/*var a = ()=>{
    return 12;
}
var b=a();*/

//Implicit Return
var a=()=>12;
var b=a();