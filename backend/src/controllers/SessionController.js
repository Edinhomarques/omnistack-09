//Sessão pois está relacionado a autenticação
/* Metodos
* index -> listagem das sessions
* show -> listagem de uma unica sessão
* store -> store serve para criar uma sessão.
* udpate -> alterar uma sessão.
* destroy -> removar deletar uma sessão.
* Controllers vai onde estão as regras de negócio na aplicação.
*/
const User = require('../models/User');
module.exports = {
//async pois pode haver uma demora
    async store(req, res) {
        //sem desestruturação
        //const email = req.body.email;
        const { email } = req.body;
        
        let user = await User.findOne({ email });
        
        if(!user) {
          user = await User.create({ email });
        }
         return res.json(user);

    },
    async index(req, res){
        const user = await User.find()
        return res.json({user});
    }
};