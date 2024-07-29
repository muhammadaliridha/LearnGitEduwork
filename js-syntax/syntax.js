// Buatlah 3 buah variable
//Variable pertama berupa angka 10 dan variable kedua berupa tulisan “saya belajar javascript”
var variable1 = 10; // Number
var variable2 = "saya belajar javascript"; // String
var variable3 = 5; // Arbitrary number for solving any issue

// Lalu jumlahkan antara variable pertama dan kedua
var result = variable1 + variable2;

//  Apabila anda menemukan keanehan atau masalah maka silahkan jumlahkan dengan angka berapapun menggunakan variable ketiga untuk menggantikan variable yang bermasalah
if (typeof result !== 'number') {
  // Since the result is not a number, it means there is an issue
  // Step 4: Resolve the issue by using the third variable
  result = variable1 + variable3; // Replace problematic variable2 with variable3
}

console.log(result); // Output the result
