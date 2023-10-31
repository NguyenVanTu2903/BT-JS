// BTVN: Array + Function
var foods = ["Pizza", "Pho Bo", "Ramen", "Sushi", "Banh My"];
// 1. Sap xep tang dan va giam dan theo so luong ky tu
// 2. Bien doi mang sang dang: "Pizza" => "Pizza - 5"
// 3. Nhap vao cac mon ban thich: "Mi Tom, Keo bong" => Them cac mon tu format tren vao mang
// 4. Tao mot mang moi gom cac mon chua chu "a"
// 5. Tim nhung mon chua 5 ky tu

// =============================================

// 1
const sortUpAscending = (arr) => {
    for (let i = 0; i <= arr.length - 1; i++) {
        for (let j = i + 1; j <= arr.length - 1; j++) {
            if (arr[i].length > arr[j].length) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
};

const sortDescending = (arr) => {
    for (let i = 0; i <= arr.length - 1; i++) {
        for (let j = i + 1; j <= arr.length - 1; j++) {
            if (arr[i].length < arr[j].length) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
};
const arr = [...foods];
const arrDescending = [...foods];
console.log("=====1a=====");
console.log(sortUpAscending(arr));
console.log("=====1b=====");
console.log(sortDescending(arrDescending));
// 2
const mapArr = foods.map((food) => food.replace("Pizza", "Pizza - 5"));
console.log("=====2=====");
console.log(mapArr);
// 3
let enterFoods = prompt("Enter Foods:");
while (
    enterFoods !== " " &&
    enterFoods !== "" &&
    typeof enterFoods === "string"
) {
    foods.push(enterFoods);
    enterFoods = prompt("Enter Foods:");
}
console.log("=====3=====");
console.log(foods);

// 4
const newArr = foods.filter((food) => food.includes("a"));
console.log("=====4=====");
console.log(newArr);

//
const findArr = foods.filter((food) => food.length === 5);
console.log("=====5=====");
console.log(findArr);
