const pessoa = {
    nome: 'João Paulo',
    idade: 30,
    profissão: 'desenvolvedor' 
}

pessoa.idade = 30;

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor'
}

const paula: {nome: string, idade: number, profissao: string} = {
    nome: 'Paula',
    idade: 25,
    profissao: 'Desenvolvedora'
}

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    Jogadoradefutebol,
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}
const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const maria: Pessoa = {
    nome: 'Maria',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}


const jessica: Estudante = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Atriz,
    materias: ['Lógica', 'Programação']
}

const monica: Estudante = {
    nome: 'Monica',
    idade: 28,
    materias: ['Lógica', 'Programação']
}

function listar(lista: string[]) {
    for (const item of lista){
        console.log('- ', item);
    }
}

listar(monica.materias);