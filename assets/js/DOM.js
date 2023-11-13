// 1. Go vao o input va hien thi ket qua duoi the p ngay ben duoi (input)
// 2. Khi change gia tri duoc chon trong radio thi thay doi gia tri hien thi o the p ben duoi
// 3. Khi an nut hien thi thong tin: ten nut, ma nut,co an ctrl k0,

// 1
const input = document.getElementById("input");
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        const result = document.querySelector(".wrapper p");
        result.innerHTML = `${input.value}`;
    }
});

// 2
const valueChange = document.getElementById("valueChange");
valueChange.addEventListener("change", (e) => {
    const result = document.querySelector("#valueChange p");
    result.innerHTML = `${e.target.value}`;
});

// 3
document.addEventListener("keydown", (e) => {
    document.querySelector(
        ".infoKey p:first-child > span"
    ).innerHTML = `${e.key}`;

    document.querySelector(
        ".infoKey p:last-child > span"
    ).innerHTML = `${e.which}`;
});
