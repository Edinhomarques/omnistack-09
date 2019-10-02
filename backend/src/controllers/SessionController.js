//Sessão pois está relacionado a autenticação
/* Metodos
* index
* show
* store
* udpate
* destroy
*/
const User = require('../models/User');
module.exports = {
//async pois pode haver uma demora
    async store(req, res) {
        //sem desestruturação
        //const email = req.body.email;
        const {email} = req.body;
        
        let user = await User.findOne({ email });
        
        if(!user){
          user = await User.create({email});
        }
         return res.json(user);
     

    },
    async index(req, res){
        const user = await User.find()
        return res.json(user);
    }
};