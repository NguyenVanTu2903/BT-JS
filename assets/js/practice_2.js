// BT Array (*)
var languages = ["Javascript", "PHP", "Java", "C#"];
// 1. Thay the "PHP" bang "Python"
// 2. Tim tu ngan nhat va dai nhat trong mang
// 3. Tim cac tu chua chuoi "Java"
// 4. Them phan tu "Dart" vao dau mang va "Kolin" vao cuoi mang
// 5. Hop nhat mang ban dau voi mang sau: ["Flutter","Laravel","ExpressJS",".Net"]
// ============================================================================

// 1
var repArr = [...languages];
repArr.splice(1, 1, "Python");

console.log(repArr);

// 2
var check = languages[0].length;
var long;
var short;
for (var idx in languages) {
    if (check <= languages[idx].length) {
        check = languages[idx].length;
        long = idx;
    }
}

console.log(languages[long]);
for (var idx in languages) {
    if (check >= languages[idx].length) {
        check = languages[idx].length;
        short = idx;
    }
}
console.log(languages[short]);

// 3
var arr = [];
for (var val of languages) {
    if (val.includes("Java")) arr.push(val);
}

console.log(arr);

// 4
var updateArr = [...languages];
updateArr.push("Kolin");
updateArr.unshift("Dart");
console.log(updateArr);

// 5
// console.log(languages);
var subArr = ["Flutter", "Laravel", "ExpressJS", ".Net"];
var mergeArr = languages.concat(subArr);
console.log(mergeArr);
