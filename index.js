
import dotenv from 'dotenv';
dotenv.config(); // carrega o .envimport express from 'express'

import bodyParser from 'body-parser';
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs')

//liberar acesso a pasta public
import { fileURLToPath} from 'url';
import {dirname} from 'path';
import routes from "./routes/route.js"


//converter o caminho do arquivo atual

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use (express.static(__dirname + '/public'));

app.use(routes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});