const mongoose = require('mongoose');
/**
 * Model representa uma entidade na nossa aplicação, um schema/tabela no banco de dados.
 * O nome do arquivo começa com letra maiuscula Ex:User.js
 */
//UserSchema é a estrutura do User, quais campos ele tem e qual tipos de campos.
const UserSchema = new mongoose.Schema( {
    email: String
});

module.exports = mongoose.model('User', UserSchema);