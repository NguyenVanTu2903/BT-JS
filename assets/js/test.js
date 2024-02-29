// 1. Tao 1 object gom cac thong tin cua ban than (id,name,age,favorites:[],hadBike ,book:{id,name,quantity,price})
// - In ra toan bo thong tin
// - In rieng name, favorites, hadbike, book
// - In name, quantity, price cua book moi property bang 1 cach
// - Add 2 key-value vao object
// - Cap nhat 2 key-value moi them
// - Xoa 2 cap key-value moi
// - Kiem tra xem name va job co la key cua object hay k0
var myInfo = {
    id: 1,
    name: "Tu",
    age: 24,
    favorites: ["football", "jogging ", "watch a movie"],
    hadBike: "Yes",
    book: {
        id: 1,
        name: "Javascript",
        quantity: 100,
        price: 1000000,
    },
};

console.log(myInfo);

console.log(myInfo.name);
console.log(myInfo.favorites);
console.log(myInfo.hadBike);
console.log(myInfo.book);

console.log(myInfo.book.name);
console.log(myInfo.book["quantity"]);
console.log(myInfo["book"].price);

myInfo.address = "Viet Nam";
myInfo.pet = "cat";
console.log(myInfo.address);
console.log(myInfo.pet);

myInfo.address = "Hoi An";
myInfo.pet = "dog";
console.log(myInfo.address);
console.log(myInfo.pet);

delete myInfo.address;
delete myInfo.pet;
console.log(myInfo.address);
console.log(myInfo.pet);

console.log("name" in myInfo);
console.log("job" in myInfo);
