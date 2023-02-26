/*
Sắp xếp mảng sau theo thứ tự tăng dần (không sử dụng sort())

*/



// for (let i = 1; i < numbers.length; i++) {
//   let key = numbers[i] // 4;
//   let j = i - 1;
//   while (j >= 0 && numbers[j] > key) {
//     numbers[j + 1] = numbers[j]; // numbers[i] = numbers[j];
//     j = j - 1;
//   }
//   numbers[j + 1] = key;
// }

// console.log("Mảng được sắp xếp thăng dần", numbers);


// let numbers = [3, 4, 1, 5, 7, 10, 9, 6, 15, 2, 8];
// // Code chuẩn: for lồng for
// for (let i = 0; i < numbers.length; i++) {
//   for (let j = i + 1; j < numbers.length; j++) {
//     if (numbers[j] < numbers[i]) {
//       let temp = numbers[i];
//       numbers[i] = numbers[j];
//       numbers[j] = temp
//     }
//   }
// }


// console.log("Mảng được sắp xếp thăng dần", numbers);




// Chữa bài Luyện tập
/*
1 In ra các số chia hết cho 7  từ dãy số 1 – 99  (bằng for)

2 In ra các số chia hết cho 6  từ dãy 0 – 80 (bằng for)

3 Viết chương trình tinh tổng của các số chẵn từ 1 – 50 

4 Viết chương trình tính tổng của các số lẻ từ 1 – 50

5 Cho người dùng nhập vào 2 số : số thứ nhất và số thứ 2 là số đầu và số cuối của 1 dãy số sau đó thông báo ra có bao nhiêu số tự nhiên trong dạy số đó
Vd : Người dùng nhập vào là 2 và 5 thì thông báo có 4 số tự nhiên trong dãy số  (2 ,3,4,5)
-Sau đó tính tổng của dãy số đó và thông báo cho người dùng 
1 +2 +3+4......+30
*/


// Bài 1
// for (let i = 1; i < 100; i++) {
//   if (i % 7 == 0) {
//     console.log(i);
//   }
// }

// Bài 2: 
// for (let i = 1; i < 100; i++) {
//   if (i % 2 == 0 && i % 3 == 0) {
//     console.log(i);
//   }
// }

// Bài 3: 
let sumC = 0
let sumL = 0
for (let i = 1; i <= 50; i++) {
  if (i % 2 == 0) {
    sumC = sumC + i;
  }
  else {
    sumL = sumL + i;
  }
}
console.log(sumC); // Tổng số chẵn
console.log(sumL);// Tổng số lẻ


// Bài 5: 
let so1 = Number(prompt("Mời người dùng nhập vào số đầu tiên"));
let so2 = Number(prompt("Mời người dùng nhập vào số thứ 2"));

let dem = 0;
let sum = 0;
for (let i = so1; i <= so2; i++) {
  dem = dem + 1;
  sum = sum + i;
}
console.log("Có tự nhiên là", dem + " số");
console.log("Tổng dãy số đó", sum); // Tổng của dãy số đó