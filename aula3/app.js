const fs = require('fs');

//ffs.mkdirSync('logs')

// fs.mkdir('logs2',(erro)=>{

// if(erro){


//     console.log(erro)
// }


// })

if(fs.existsSync('logs2')){
    fs.rmdirSync('logs2')

}
console.log('File de execução' )