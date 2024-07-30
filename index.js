const prompt = require ("prompt-sync")();
const {mensagemMenu,add,list} = require ("./modules")

mensagemMenu()


switch (mensagemMenu()) {
    case 1:
    add()
    console.log(mensagemMenu)
        break;
    case 2:
    
        break;
    case 3:

        break;
    case 4:
    list()
        break;
    case 5:

        break;
    default:
        break;
}