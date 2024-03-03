//2

// //a. Tạo mảng có tên là styles với các mục “Jazz” và “Blues”.
// var styles = ["Jazz", "Blues"];
// console.log(styles);

// //b. Thêm “Rock-n-Roll” vào cuối.
// styles.push("Rock-n-Roll");
// console.log(styles);

// //c. Thay thế giá trị ở giữa bằng “Classics”. Code để tìm giá trị giữa sẽ hoạt động với bất kỳ mảng nào có độ dài lẻ.

// var mid = Math.floor(styles.length / 2);
// styles.splice(mid, 1, "Classics");
// console.log(styles);

// // d. Tách giá trị đầu tiên của mảng và hiển thị nó.
// styles.shift(1);
// console.log(styles);

// // e. Thêm trước Rap và Reggae vào mảng.
// styles.unshift("Rap", "Reggae");
// console.log(styles);

// 11
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 25 };
// let mary = { name: "Mary", age: 25 };

// let users = [john, pete, mary];

// let names = users.map((e) => e.name);
// alert(names);

// 12
// let arr = [
//     { id: 1, name: "A", surname: "Nguyen" },
//     { id: 2, name: "B", surname: "Nguyen" },
//     { id: 3, name: "C", surname: "Nguyen" },
// ];

// let newArr = arr.map(({ id, name, surname }) => ({
//     id: id,
//     name: name + " " + surname,
// }));
// console.log(newArr);

// 13
// let user = [
//     {
//         name: "A",
//         age: 20,
//     },
//     {
//         name: "B",
//         age: 19,
//     },
//     {
//         name: "C",
//         age: 21,
//     },
// ];

// function sortByAge(user) {
//     return user.sort((a, b) => (a.age > b.age ? 1 : -1));
// }
// console.log(sortByAge(user));

// 14
// let users = [
//     {
//         age: 19,
//     },
//     {
//         age: 20,
//     },
//     {
//         age: 21,
//     },
// ];
// function getAverageAge(users) {
//     let sumAge = users.reduce((acc, value) => acc + value.age, 0);
//     let result = sumAge / users.length;
//     return result;
// }

// console.log(getAverageAge(users));

// 15
let users = [
    { id: "john", name: "John Smith", age: 20 },
    { id: "ann", name: "Ann Smith", age: 24 },
    { id: "pete", name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users);

function groupById(users) {
    return users.reduce((acc, value) => {
        acc[value.id] = value;
        return acc;
    }, {});
}

console.log(usersById);
