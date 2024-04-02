//const { error } = require('console');
const fs = require('fs');

//ffs.mkdirSync('logs')

// fs.mkdir('logs2',(erro)=>{

// if(erro){


//     console.log(erro)
// }


// })
fs.appendFile('dados','gu',(erro)=>{
    console.log(erro)

})

if(fs.existsSync('dados')){

    fs.rmSync('dados')


}
console.log('fim da execução')