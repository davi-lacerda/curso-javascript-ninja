/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = [ 1, 'a', 1.54, true, undefined ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arg) {
    return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myFunction(myArray)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2(arr, i) {
    return arr[i];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myArray2 = [ 1, 'a', null, ['txt', 5, false ], { nome: undefined, idade: 0} ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myFunction(myArray2);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(bookname) {
    var collection = {
        'Das Kapital': { quantidadePaginas: 674, autor: 'Karl Marx', editora: 'boitempo' },
        'Crise e Golpe' : { quantidadePaginas: 208, autor: 'Alysson Mascaro', editora: 'boitempo' },
        'Ulysses' : { quantidadePaginas: 728, autor: 'James Joyce', editora: 'Companhia das Letras‎' }
    };
    return collection[bookname];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book('Das Kapital');
book('Crise e Golpe');
book('Ulysses');

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
`O livro Crise e Golpe tem ${book('Crise e Golpe').quantidadePaginas} páginas!`

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
`O autor do livro Ulysses é ${book('Ulysses').autor}`

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
`O livro Das Kapital foi publicado pela editora ${book('Das Kapital').editora}.`
