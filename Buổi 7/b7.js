let arr = [["táo" , 20], ["Xoài" , 30] , ["ổi" , 10]]
arr.push(["Bơ" , 3])
console.log("Giỏ trái cây : " ,arr);

console.log("Tôi có" , arr[0][1] , "Quả" , arr[0][0]);
console.log("Tôi có" , arr[1][1] , "Quả" , arr[1][0]);
console.log("Tôi có" , arr[2][1] , "Quả" , arr[2][0]);

for(let i = 0 ; i < arr.length; i++){
    console.log("Tôi có" , arr[i][1] , "Quả" , arr[i][0]);
}

let myDog = {
    name : "Ngáo" ,
    legs : "4 chân",
    friend : "everyone",
}
myDog.name = "Husky" 
myDog.color = "Brown"
delete myDog.friend
console.log (myDog);

// delete chỉ xóa được trường của 1 object
// let Husky = myDog
// console.log(Husky); Cái này là để gán thẻ này = thẻ khác
// Nó giống x = 3 và y = x (so simple :)))

// myDog = null
// console.log(Husky);
// Null là rỗng , tên của object + null = cả object rỗng

// Bài 1: Cho người dùng nhập vào một số và in ra bảng cửu chương 
// let man = prompt ("Muốn xem bảng cửu chương số mấy?")
// for (let i = 0 ; i < 9 ; i++){
//     document.write ("Bảng")
// }
// if (man == 2){
//     document.write ("2 x 1 = 2 ")
//     document.write ("2 x 2 = 4 ")
//     document.write ("2 x 3 = 6 ")
//     document.write ("2 x 4 = 8 ")
//     document.write ("2 x 5 = 10 ")
//     document.write ("2 x 6 = 12 ")
//     document.write ("2 x 7 = 14 ")
//     document.write ("2 x 8 = 16 ")
//     document.write ("2 x 9 = 18 ")
//     document.write ("2 x 10 = 20 ")
// }
// Bài 1 :
let num = prompt("Nhập số: ");

for (let i = 1; i <= 10; i++) {
	console.log(
		"%c" + num + " x " + i + " = " + num * i,
		"background: #f00; color: #fff; padding: 5px;"
	);
}
// Bài 2 : 
let sentence = prompt("Nhập một câu: ");

alert("Số chữ: " + sentence.split(" ").length);
console.log(sentence.split(" "));
alert("Số ký tự: " + sentence.length);