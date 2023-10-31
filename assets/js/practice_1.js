// var str = 'The man who take my book.'
// 1. Tim vi tri cua tu dau tien chua chu "o"
// 2. Thay the "my book" thanh "my bag"
// 3. Them chuoi sau vao chuoi ban dau: "I don't know that man."
// 4. Hightlight "my bag" with 2 star like: "*my bag*"
// 5. Tach chuoi thanh mang va tim nhung tu chua ky tu "a"

// ==========================================================
var str = "The man who take my book.";
var arr = str.split(" ");
// 1
// for (var idx in arr) {
//     var subArr = arr[idx];
//     var check = false;
//     for (var val of subArr) {
//         if (val.includes("o")) check = true;
//     }

//     if (check) {
//         console.log("The first position contains the letter o:", idx);
//         break;
//     }
// }
var firstO = str.indexOf("o");
var subStr = str.slice(0, firstO);
var result = subStr.lastIndexOf(" ") + 1;

console.log(result, str[result]);

// 2
var replaceStr = str.replaceAll("my book", "my bag");
console.log(replaceStr);

// 3
var lastStr = "I don't know that man.";
var addStr = str + " " + lastStr;
console.log(addStr);

// 4
var hightlightStr = replaceStr.replaceAll("my bag", "*my bag*");
console.log(hightlightStr);

// 5
var newArr = [];
for (var idx in arr) {
    var subArr = arr[idx];
    for (var val of subArr) {
        if (val.includes("a")) newArr.push(subArr);
    }
}

console.log(newArr);
