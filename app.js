// require("colors");
const argv = require("./config/yargs").argv;
// console.log(argv);
console.clear();
console.log(argv);
let param = argv._[0];
console.log(param);
switch(param){
    case 'llistar':
        console.log('llisto la taula de multiplicac');
        break;
    case 'crear':
        console.log('crea un nou fitxer');
        break;
    default:
    console.log('Comanda no reconeguda');
}