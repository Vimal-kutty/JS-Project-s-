
const quotes = [
    {
        quo: `"point 2"`,
        autho: `--KUTTY`
    },
    {
        quo: `"point 3"`,
        autho: `--Vimal`
    },
    {
        quo: `"point 4"`,
        autho: `--VK`
    }
]

let btn = document.getElementById("#btn");
let quo = document.querySelector(".quotes");
let autho = document.querySelector(".author");

btn.addEventListener("click",function(){
    let random = math.floor(math.random()* quotes.length);

    quo.innerHTML=quotes[random].quotes;
    autho.innerHTML = quotes[random].autho;
})