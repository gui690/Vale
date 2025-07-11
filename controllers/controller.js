
import Usuario from "../models/usuario.js";

export async function home(req, res) {
  res.render("admin/index");
}
//usuario

export async function abreaddusuario(req, res) {
  const resultado = await Usuario.find({}).catch(function(err){console.log(err)});
  res.render("admin/usuario/add", {Usuario: resultado});
}
export async function addusuario(req, res) {
  try {
    // Validação simples (pode melhorar depois)
    if(!req.body.nome || !req.body.email) {
      return res.status(400).send("Nome e email são obrigatórios");
    }

    await Usuario.create({
      nome: req.body.nome,
      valor: req.body.valor,
      dataCriacao: req.body.dataCriacao,
      email: req.body.email,
      cpf: req.body.cpf,
      telefone: req.body.telefone,
    });

    res.redirect("/admin/usuario/lst");
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao adicionar usuário.");
  }
}
export async function listarusuario(req, res) {
  const resultado = await Usuario.find({}).catch(function (err) {
    console.log(err);
  });
  res.render("admin/usuario/lst", { Usuario: resultado });
}
export async function deletausuario(req, res) {
  await Usuario.findByIdAndDelete(req.params.id)
  res.redirect("/admin/usuario/lst");
}
export async function abreedtusuario(req, res) {
  const resultado = await Usuario.findById(req.params.id)
  res.render("admin/usuario/edt", {Usuario:resultado});
}
export async function edtusuario(req, res) {
  await Usuario.findByIdAndUpdate(req.params.id, req.body)
  res.redirect("/admin/usuario/lst");
}
export async function filtrarusuario(req, res) {
  const resposta = await Usuario.find({nome:new RegExp(req.body.pesquisar,"i")})
  res.render("admin/usuario/lst", {Usuario:resposta});
}

