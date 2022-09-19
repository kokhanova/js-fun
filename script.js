const getNumber = (max = 11, min = 0) => Math.floor(Math.random() * (max - min) + min);
const optimizeNumber = (n) => {
    return (n + "").length === 2 ? n : "0" + n;
}

const data = [];
const colors = ["#CDB9D6aa", "#02A298aa", "#A3D8CFaa", "#F0B2ABaa", "#8f7975aa", "#73615Eaa"];

let n = Math.floor(getNumber(61, 6) / 6) * 6;

while(n--) {
    data.push(getNumber(100))
}


const box = document.querySelector(".box");
box.innerHTML = "<div class=\"card\"></div>"

for(let val of data) {
    box.innerHTML += `<div class="card"
    style="background-color: ${colors[getNumber(colors.length - 1)]}">${optimizeNumber(val)}</div>`;
}
const nullish = (value, str) => {
    if (value === 0) return '';
    return `${value} ${str}`;
}

function showTime(day = new Date(2023, 1, 7, 23)) {
    let now = new Date();
    let d, h, m, s;
    let time = Math.floor((day - now) / 1000);

    m = Math.floor(time / 60);
    s = time - m * 60;
    // s = 2
    h = Math.floor(m / 60);
    m -= h * 60;
    d = Math.floor(h / 24);
    h -= d *24;
    return `${nullish(d, 'дн.')}  ${nullish(h, 'ч.')}  ${nullish(m, 'мин.')}  ${nullish(s, 'сек.')} `;
}

setInterval(function(){
    box.firstElementChild.innerText = `До завершения обучения осталось: ${showTime()}`;
});



