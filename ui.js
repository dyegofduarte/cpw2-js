/**
 * ARQUIVO QUE EU CRIEI PARA AS FUNCṌES DE USER INTERFACE / FRONT-END
 */

//import * as fs from "./index.js";

function rec_notas()
    {
        let nota1 = document.getElementById("NOTA1").value;
        let nota2 = document.getElementById("NOTA2").value;
        let nota3 = document.getElementById("NOTA3").value;
        
        let notas = [];
        nota1 = parseInt(nota1);
        nota2 = parseInt(nota2);
        nota3 = parseInt(nota3);

        notas[0] = nota1;
        notas[1] = nota2;
        notas[2] = nota3;
        
        return notas;
            }


function rec_nome()
    {
        let entrada = document.getElementById("NOME").value;
 
        
        return entrada;
            }


function envia_data()
    {
        let entrada = document.getElementById("DATA").value;
        console.log(entrada);
        
        return entrada;
            }


//fs.wide(envia_data());