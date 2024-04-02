let nomes =['Cris', 'Hemy','Gu']
let frutas =['Amora','Banana','Cereja']
//exportação explicita do array

module.exports=nomes;
module.exports=frutas

function soma( a,b){


    return a+b;
}

module.exports= {

nomes,
frutas,
soma
}