import conexao from '../config/conexao.js';

const Usuario = conexao.Schema({
    nome: { type: String, required: true },
    valor: { type: Number, required: true },
    dataCriacao: { type: Date, required: true },
    email: { type: String, required: true },
    cpf: { type: String, required: true },        // troquei para String
    telefone: { type: String, required: true }
});
export default conexao.model("Usuario", Usuario);