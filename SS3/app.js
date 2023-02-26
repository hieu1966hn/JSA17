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


let numbers = [3, 4, 1, 5, 7, 10, 9, 6, 15, 2, 8];
// Code chuẩn: for lồng for
for (let i = 0; i < numbers.length; i++) {
  for (let j = i + 1; j < numbers.length; j++) {
    if (numbers[j] < numbers[i]) {
      let temp = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = temp
    }
  }
}


console.log("Mảng được sắp xếp thăng dần", numbers);