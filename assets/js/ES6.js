// Tạo ra một mảng fruits [4] lưu trong localStorage
// + Thêm 1 quả
// + Xóa 1 quả bất kỳ
// + Thay thế 1 quả bất kỳ
// + Tìm quả ở vị trí đầu và cuổi
// + Tìm quả ở vị trí giữa
// + Tìm các loại quả chứa chữ "a"
// + Kiểm tra xem trong mảng có Apple k0
// + Gộp thêm 2 loại quả bất kỳ ở mảng khác vào mảng fruits
// + Sắp xếp theo A-Z và Z-A (hof: soft)
localStorage.setItem(
    "fruits",
    JSON.stringify(["apple", "banana", "grape", "kiwi"])
);
let fruits = getFruits("fruits");
const menu = `
 1 Thêm 1 quả
 2 Xóa 1 quả bất kỳ
 3 Thay thế 1 quả bất kỳ
 4 Tìm quả ở vị trí đầu và cuổi
 5 Tìm quả ở vị trí giữa
 6 Tìm các loại quả chứa chữ "a"
 7 Kiểm tra xem trong mảng có Apple k0
 8 Gộp thêm 2 loại quả bất kỳ ở mảng khác vào mảng fruits
 9 Sắp xếp theo A-Z và Z-A (hof: soft)
Enter: `;

let enter = Number(prompt(menu));

while (enter >= 1 && enter <= 9) {
    switch (enter) {
        case 1:
            console.log("before:", fruits);
            addFruits(fruits);
            saveFruits("fruits", fruits);
            console.log("after:", fruits);
            break;

        case 2:
            console.log("before:", fruits);
            removeFruits(fruits);
            saveFruits("fruits", fruits);
            console.log("after:", fruits);
            break;

        case 3:
            console.log("before:", fruits);
            replaceFruits(fruits);
            saveFruits("fruits", fruits);
            console.log("after:", fruits);
            break;

        case 4:
            findFruits(fruits);
            break;

        case 5:
            findMidFruits(fruits);
            break;

        case 6:
            console.log(
                "fruits had name include the letter a: ",
                filterFruits(fruits)
            );
            break;

        case 7:
            hadApple(fruits);
            break;

        case 8:
            console.log("before:", fruits);
            console.log("after:", mergeFruits(fruits));
            saveFruits("fruits", fruits);
            break;

        case 9:
            console.log("Arranged from A - Z : ", fruits.sort());
            console.log("Arranged from Z - A : ", sortFruitsZA(fruits));
            break;

        default:
            break;
    }
    enter = Number(prompt(menu));
}

function getFruits(data) {
    return JSON.parse(localStorage.getItem(data));
}

function saveFruits(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function addFruits(data) {
    let addFruits = prompt("add Fruits: ");
    return data.push(addFruits);
}

function removeFruits(data) {
    let removeFruits = prompt("remove Fruits: ");
    for (const key in data) {
        if (data[key] === removeFruits) {
            data.splice(key, 1);
        }
    }

    return data;
}

function replaceFruits(data) {
    let replaceFruits = prompt("replace Fruits: ");
    for (const key in data) {
        if (data[key] === replaceFruits) {
            let newFruits = prompt("new Fruits: ");
            data.splice(key, 1, newFruits);
        }
    }
}

function findFruits(data) {
    for (const key in data) {
        // console.log(key, data[key]);
        if (key == 0) {
            console.log("fruits at first position: ", data[key]);
        } else if (key == data.length - 1)
            console.log("fruits at lats position: ", data[key]);
    }
}

function findMidFruits(data) {
    if (data.length % 2 == 0) {
        const idx = Math.trunc((data.length - 1) / 2);
        console.log("fruits at mid position: ", data[idx], data[idx + 1]);
    } else {
        const idx = (data.length - 1) / 2;
        console.log("fruits at mid position: ", data[idx]);
    }
}

function filterFruits(data) {
    let filterFruits = [];
    for (var key in data) {
        if (data[key].includes("a")) filterFruits.push(data[key]);
    }

    return filterFruits;
}

function hadApple(data) {
    if (data.includes("apple")) console.log("yes");
    else console.log("no");
}

function mergeFruits(data) {
    const addFruits = [];
    const quantityFruit = Number(prompt("quantity of fruit"));
    for (let i = 0; i < quantityFruit; i++) {
        let enterFruits = prompt("Enter fruit number" + `${i + 1}` + " : ");
        addFruits.push(enterFruits);
    }
    data = [...data].concat(addFruits);
    return data;
}

function sortFruitsZA(data) {
    const sortFruitsZA = data.sort((a, b) => {
        if (a < b) return 1;
        else if (a > b) return -1;
        else return 0;
    });

    return sortFruitsZA;
}

// localStorage.removeItem("fruits");
