import express from 'express'
const router = express.Router();

import multer from 'multer';
var storage = multer.diskStorage({
    filename: function(req, file, cb){
    let nome = Date.now() + "-" + file.originalname
    cb(null, nome)
    },
    destination: function(req, file, cb){
    let path = "./public/arquivos"
    cb(null, path)
    }
    })
    var upload = multer({ storage })
    

import {
    home,
   
    //
    abreedtusuario,
    edtusuario,
    abreaddusuario,
    deletausuario,
    addusuario,
    listarusuario,
    filtrarusuario,
    //
} from '../controllers/controller.js'
router.get('/', home)

//usuario

//create do modelo usuario (create)
router.get('/admin/usuario/add', abreaddusuario);
router.post('/admin/usuario/add', addusuario);
//rotas do modelo usuario (read)
router.get('/admin/usuario/lst', listarusuario);
router.post('/admin/usuario/lst', filtrarusuario);
//rota do modelo usuario (delete)
router.get('/admin/usuario/del/:id', deletausuario);

//rota do modelo usuario (editar)

router.get('/admin/usuario/edt/:id', abreedtusuario);
router.post('/admin/usuario/edt/:id', upload.single('foto'),edtusuario);


export default router