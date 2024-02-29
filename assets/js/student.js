localStorage.setItem("info", JSON.stringify([]));
let info = getInfo("info");

const menu = `
1 Thêm sinh viên
2 Sửa sinh viên
3 Xóa sinh viên
Enter: `;

let enter = Number(prompt(menu));

while (enter >= 1 && enter <= 3) {
    switch (enter) {
        case 1:
            addStudent(info);
            saveInfo("info", info);
            console.table(info);
            break;

        case 2:
            fixStudent(info);
            saveInfo("info", info);
            console.table(info);
            break;
        case 3:
            deleteStudent(info);
            saveInfo("info", info);
            console.table(info);
            break;

        default:
            break;
    }
    enter = Number(prompt(menu));
}

function getInfo(info) {
    return JSON.parse(localStorage.getItem(info));
}

function saveInfo(key, info) {
    localStorage.setItem(key, JSON.stringify(info));
}

function addStudent(info) {
    let obj = {};
    let id = Number(prompt("id: "));
    let name = prompt("name: ");
    let age = Number(prompt("age: "));
    let phone = Number(prompt("phone: "));
    let className = prompt("class: ");
    let status = prompt("status: ");
    obj.id = id;
    obj.name = name;
    obj.age = age;
    obj.phone = phone;
    obj.className = className;
    obj.status = status;

    return info.push(obj);
}

function fixStudent(info) {
    let id = Number(prompt("Nhap id cua sinh vien muon sua: "));
    info.forEach((e) => {
        if (e.id === id) {
            let name = prompt("name: ");
            let age = Number(prompt("age: "));
            let phone = Number(prompt("phone: "));
            let className = prompt("class: ");
            let status = prompt("status: ");
            e.name = name;
            e.age = age;
            e.phone = phone;
            e.className = className;
            e.status = status;
        }
    });
}

function deleteStudent(info) {
    let id = Number(prompt("Nhap id cua sinh vien muon xoa: "));

    info.forEach((e, idx) => {
        if (e.id === id) {
            info.splice(idx, 1);
        }
    });
}
