// Object
// Date
// Callback
// HOF + Array
// Recursive
// localStorage
//? B1: Sắp xếp theo giá tiền từ lớn về bé từ mảng courses (trong github)
//? B2: Tìm vị trí của khóa học đắt nhất
//? B3: Tìm các khóa học có chứa chữ 'a' trong tên khóa học
//? B4: Dùng map biến đổi từng phần tử của mảng đưa vào thẻ chuỗi thẻ li bao gồm các thông tin: [số thứ tự]. [tên khóa học]: [Giá khóa học]
//? B5: Tìm những người cả john và sara cùng follow
//? johnFollowers=['Tim','Matin','Sinestra','Mr.Bean','Kayle','Sara']
//? saraFollowers=['John','Matin','Kayle','Peter','Sinestra','Robin']

var courses = [
    {
        id: 1,
        name: "Javascript",
        price: 300,
    },
    {
        id: 2,
        name: "HTML, CSS",
        price: 250,
    },
    {
        id: 3,
        name: "Ruby",
        price: 50,
    },
    {
        id: 4,
        name: "PHP",
        price: 400,
    },
    {
        id: 5,
        name: "ReactJS",
        price: 500,
    },
    {
        id: 6,
        name: "Ruby",
        price: 0,
    },
];

const sortDescending = (arr) => arr.sort((a, b) => b.price - a.price);
const arr = [...courses];
console.log("=====1=====");
console.log(sortDescending(arr));
console.log("=====2=====");
const maxPrice = arr[0].price;
courses.forEach((ele, idx) => {
    if (ele.price === maxPrice) console.log(idx);
});

const findName = courses.filter((ele) => ele.name.includes("a"));
console.log("=====3=====");
console.log(findName);

const listCourses = courses.map(
    (ele) => `<li>${ele.id}. ${ele.name}: ${ele.price}</li>`
);

const htmlCourses = listCourses.join(" ");
document.getElementById("practice_4").innerHTML = htmlCourses;

const johnFollowers = ["Tim", "Matin", "Sinestra", "Mr.Bean", "Kayle", "Sara"];
const saraFollowers = ["John", "Matin", "Kayle", "Peter", "Sinestra", "Robin"];

const mergeFollowers = johnFollowers.concat(saraFollowers);
const findFollowers = mergeFollowers.filter(
    (val, idx) => mergeFollowers.indexOf(val) !== idx
);
console.log(findFollowers);
