const alunos = ['Luiz', 'Maria', 'João']

alunos[0] = 'Vini'
console.log(alunos)

console.log(alunos.length)

alunos.push('Cleber') // adiciona no final
console.log(alunos)

alunos.unshift('Luiza') // adiciona no inicio
console.log(alunos)

alunos.pop() // retira a ultima coisa da lista
console.log(alunos)

alunos.shift() // retira do começo da lista (o primeiro)
console.log(alunos)

delete alunos[1] // deleta a informação da lista no indice passado, nesse caso o 1, porém nao some da lista, fica a seguinte msng: <1 empty item>
console.log(alunos)