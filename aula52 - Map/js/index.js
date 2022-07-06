const pessoas = [
    {id: 1, nome:'Vinicius'},
    {id: 2, nome:'Thales'},
    {id: 3, nome:'Marcio'}
]

const novasPessoas = new Map();
for (const pessoa of pessoas){
    const { id } = pessoa;
    console.log(id)
    novasPessoas.set(id, { ...pessoa });
}

console.log(novasPessoas)

