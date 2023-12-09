let plus = document.querySelector("#plus");

let minus = document.querySelector("#minus");

let reset = document.querySelector("#reset");

let counter = 0;

let value = document.querySelector("#countValue");

plus.addEventListener("click", () =>{
    counter++;
    countValue.innerHTML = counter;
});

minus.addEventListener("click", () =>{
    counter--;
    countValue.innerHTML = counter;
});

reset.addEventListener("click", () =>{
    counter = 0;
    countValue.innerHTML = counter;
});