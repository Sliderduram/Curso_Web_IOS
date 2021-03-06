// Método forEach()
const frutas = ['apple', 'orange', 'cherry'];
frutas.forEach(minhaFuncao);

function minhaFuncao(item, index) {
    console.log(`Índice: ${index}`);
    console.log(`Elemento: ${item}`);
}

// Método forEach() com Arrow Function
console.clear();
const frutas01 = ['apple', 'orange', 'cherry'];
frutas.forEach((it, ind) => {
    console.log(`Índice: ${ind}`);
    console.log(`Elemento: ${it}`);
});

// forEach() com array de objetos
console.clear();
const tarefas = [
    {
        id: 1,
        texto: 'Levar o lixo para fora',
        isCompleted: true,
    },
    {
        id: 2,
        texto: 'Encontrar com o chefe',
        isCompleted: true,
    },
    {
        id: 3,
        texto: 'Consulta no dentista',
        isCompleted: false,
    },
];

tarefas.forEach((teste) => console.log(teste.texto));

// Método map()
const numeros = [4, 9, 16, 25];
const newArray = numeros.map(Math.sqrt);
console.clear();
console.log('Números:');
console.log(numeros);
console.log('Novo array:');
console.log(newArray);

// Outro exemplo do map
console.clear();
const mapText = tarefas.map((valor) => {
    return valor.texto;
});
//Imprime o novo array
console.log(mapText);

// Método filter
console.clear();
const idades = [32, 33, 16, 40];

let filtroIdade = idades.filter((idade) => {
    return idade >= 18;
});
console.log(filtroIdade);

// Outro exemplo do filter
console.clear();
const filtoCompletas = tarefas.filter((item) => {
    return item.isCompleted; //=== true;
});

console.log(filtoCompletas);

// Método find()
console.clear();
const meuArray = [
    { nome: 'apples', quantidade: 2 },
    { nome: 'bananas', quantidade: 0 },
    { nome: 'cerejas', quantidade: 5 },
];

console.log(
    meuArray.find((fruta) => {
        return fruta.nome === 'cerejas';
    })
);

// teste map com array de objetos
console.clear();
let testeMap = meuArray.map((fruit) => {
    let novo = Object.assign({}, fruit);
    novo.quantidade++;
    return novo;
});

console.log('Antes: ');
console.log(meuArray);
console.log('Adicionando 1 unidade de cada fruta:');
console.log(testeMap);
