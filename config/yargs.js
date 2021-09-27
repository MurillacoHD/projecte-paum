const opts ={
    base:{
        demand:true,
        alias:'b'
    },
    limit:{
        alias:'l',
        default:10,

    }
};
const argv = require('yargs')
            .command('llistar','IMprimeix en consola la taula del multiplica',opts)
            .command('crear','Genera fitxer amb la taula de multiplica',opts)
            .help().argv;
module.exports = {
    argv
}