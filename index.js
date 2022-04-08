
/**
 * Recebe um array com os nomes de pessoas e retorna um array invertido
 *
 * @param {*} people : Um array contendo um conjunto de nomes
 * @returns Um array com os nomes invertidos
 */
function invert(people){

    // TODO
    // 1) Peça ao usuário para digitar vários nomes. Exiba na tela
    // todos os nomes digitados, porém de maneira invertida (do último para o primeiro).
    // Uma dica, você pode utilizar a função prompt para permitir que o usuário digite os
    // nomes dos usuários.

    // AQUI COMEÇA O MEU CÓDIGO
    let str_issue1_invert = [];     // ARRAY QUE RECEBERA O ARRAY ORIGINAL INVERTIDO
    let j = 0;                      // VARIAVEL PARA CONTROLAR O INDICE DE str_issue1_invert
    
    var i;

    for (i = (people.length -1) ; i >= 0 ; i--)
        {
            str_issue1_invert[j] = people[i];
            j++;
                }

    return str_issue1_invert;
    // AQUI TERMINA O MEU CÓDIGO
}

/**
 * Essa função recebe um array de notas e retorna uma média
 *
 * @param {*} grades : Um array de notas
 * @returns Uma média a partir do array de notas
 */
function mean(grades){

    // TODO
    // 2) Faça um programa que leia o nome e as três notas de uma disciplina de um aluno e ao final escreva
    // o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média para aprovação é igual
    // ou superior a 7.

    // AQUI COMEÇA O MEU CÓDIGO
    let media = (grades[0] + grades[1] + grades[2]) / 3;

    parseInt(media);

    return media;
    // AQUI TERMINA O MEU CÓDIGO

}

/**
 * Função recebe uma média e informa textualmente se um estudante está aprovado ou não
 *
 * @param {*} mean : Um número que representa uma média
 * @returns Uma string dizendo se um estudante está aprovado ou não
 */
function isApproved(mean){

    // TODO
    // 2.1) Faça um programa que leia o nome e as três notas de uma disciplina de um aluno e ao final escreva
    // o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média para aprovação é igual
    // ou superior a 7.

    // AQUI COMEÇA O MEU CÓDIGO
    let situacao;
    //let aluno = rec_nome();

    if (mean >= 7)
        {
            situacao = "aprovado";
                } 
    else
        {
            situacao = "reprovado";
                }
    //console.log(situacao);
    //document.write("Aluno " + aluno + " com a média " + mean + " Situação " + situacao);
    return situacao;
    // AQUI TERMINA O MEU CÓDIGO
    
}

/**
 * Recebe uma data no formato de string e transforma em um formato textual
 *
 * @param {*} strDate : Uma string no formato de data
 * @returns Uma descrição da data informada
 */
function wide(strDate){

    // TODO
    // 3) Faça um script que receba uma data no formato “dd/mm/aaaa” e escreva a data por extenso,
    // por exemplo, de "03/03/2022" para "03 de março de 2022". Dica: use a função
    // “split” de uma string que quebra a string em pedaços dado um separador como argumento da função.
    // Nesse caso, o separador é a barra (/) da data.


    //document.write(strDate);

    // // AQUI COMEÇA O MEU CÓDIGO
    
    let data = strDate.split("/");
    let dia = data[0];
    let mes = data[1];
    let ano = data[2];

    let data_extenso;
    let mes_convertido;

    mes = parseInt(mes);

        
    switch (mes)
        {
            case 1:
                mes_convertido = "janeiro";
            break;

            case 2:
                mes_convertido = "fevereiro";
            break;

            case 3:
                mes_convertido = "março";
            break;

            case 4:
                mes_convertido = "abril";
            break;

            case 5:
                mes_convertido = "maio";
            break;

            case 6:
                mes_convertido = "junho";
            break;

            case 7:
                mes_convertido = "julho";
            break;

            case 8:
                mes_convertido = "agosto";
            break;

            case 9:
                mes_convertido = "setembro";
            break;

            case 10:
                mes_convertido = "outubro";
            break;

            case 11:
                mes_convertido = "novembro";
            break;

            case 12:
                mes_convertido = "dezembro";
            break;

            case (!mes):
                return "";

            default:
                return ""; 
                }

    data_extenso = dia + " de " + mes_convertido + " de " + ano;

    console.log(data_extenso);
    return data_extenso;
 

    // AQUI TERMINA O MEU CÓDIGO
    
}



      

    
// Trecho utilizado pelos testes
exports._test = {
    invert: invert,
    mean: mean,
    isApproved: isApproved,
    wide: wide
}