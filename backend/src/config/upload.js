const multer = require('multer');
const path = require('path'); //serve para melhorar o caminho até a pasta uploads de acordo com SO
module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname,'..','..', 'uploads'),
        //cb = callback
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext)
            cb(null, `${name}-${Date.now()}${ext}`);// pra garantir que a imagem vai ser unica
        }
    }),
};