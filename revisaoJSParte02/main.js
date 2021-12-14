// Classes
class Carro {
    constructor(nome, ano) {
        this.nome = nome;
        this.ano = ano;
    }
}

// Intanciando objetos à classe
let meuCarro1 = new Carro('Ford', 2014);
let meuCarro2 = new Carro('Audi', 2019);

//Imprimindo valores
console.log(meuCarro1.nome);
console.log(meuCarro1.ano);

console.log(meuCarro2.nome);
console.log(meuCarro2.ano);

console.log(meuCarro1);
console.log(meuCarro2);

// Declarar nova classe com métodos
console.clear();
class NovoCarro {
    constructor(nome, ano) {
        this.nome = nome;
        this.ano = ano;
    }
    //idadeCarro(ano) {
    idadeCarro() {
        let dataHoje = new Date();
        let ano = dataHoje.getFullYear();
        return ano - this.ano;
    }
}

//Buscando o ano atual automaticamente
//let dataHoje = new Date();
//let ano = dataHoje.getFullYear();
// console.log(dataHoje);

// Intanciando o objeto à classe
let meuNovoCarro = new NovoCarro('Ford', 2014);

//console.log(meuNovoCarro.idadeCarro(ano));
console.log(meuNovoCarro.idadeCarro());

// Mais um exmeplo de classe
console.clear();
class ClassePessoa {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Instantiate object
const pessoa1 = new ClassePessoa('John', 'Doe', '1980-04-03');
const pessoa2 = new ClassePessoa('Marry', 'Smith', '1970-06-13');

console.log(pessoa1);

console.log(pessoa2.dob.getFullYear());
console.log(pessoa2.getBirthYear());

console.log(pessoa1.getFullName());

// Exemplos de Objetos
console.clear();

let marca = 'Fiat';

const carro = {
    type: 'Fiat',
    model: '500',
    color: 'white',
};

const pessoa = {
    firstName: 'John',
    lastName: 'Doe',
    age: 50,
    eyeColor: 'blue',
};

console.log('marca:');
console.log(marca);
console.log(marca.length);

console.log('carro:');
console.log(carro);

console.log('pessoa:');
console.log(pessoa);
