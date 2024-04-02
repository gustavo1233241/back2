const fs = require('fs')
// fs.readFile("./dados.csv",(erro,data)=>{

// if(erro){


// console.log(erro)


// }else{
// console.log(data.toString())

// }
// });

let dados = ""
if(fs.existsSync('dados.csv')){

dados = fs.readFileSync("dados.csv");
console.log(dados.toString())
}
else{

    console.log('arquivo não encontrado')
}


console.log("segunda opereção")