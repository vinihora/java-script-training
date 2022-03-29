const paragrafos = document.querySelector('.paragrafos');
const ps = document.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body);
const backgroudBody = estilosBody.backgroundColor;
console.log(backgroudBody)

for (let p of ps) {
    console.log(p);
    p.style.backgroundColor = backgroudBody
}