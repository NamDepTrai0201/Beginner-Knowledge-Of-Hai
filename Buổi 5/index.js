let y = 20
console.log("y = "+ y)
var z = 30
console.log("z = ",z);

let mindX = "mindx"
let school = "School"
let mindXschool = mindX + school

console.log(mindX + school);
console.log(mindXschool);
{
    let c = 3
    c = 44
    //let c
    //c = 3
    var d = 4
    d = 10
    console.log(c,d);
}
//console.log(c); Là sai
console.log(d);

const a = 10
// a = 15 gán lại là sai vì const chỉ sài đc 1 số (mặc định)
console.log(a);

// alert ("bạn đã trúng 100 tỉ")

let con = confirm("bạn vừa trúng 100 tỉ à")
console.log(con);
if(con == true){
    console.log("Uồi đỉnh");
}
else{
    console.log("Tiếc Quớ");
}
// let provip = prompt ("Nhập số tiền bạn vừa đc trúng")
// console.log(provip);

let num = 20
let num2 = 25

if(num < num2){
    console.log(num , "<" ,num2);
}
else if(num == num2){
    console.log(num , "==",num2);
}
else{
    console.log(num,">",num2);
}
