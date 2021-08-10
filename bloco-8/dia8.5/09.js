const object = {
    id: 10,
    chave: 30,
    gol: 10,
}

function teste(parametro){
    if(!parametro){
        return teste.reduce((acc) =>( acc.object), {});
    }
    console.log(acc);
}
teste();
