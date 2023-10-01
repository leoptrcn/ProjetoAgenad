const Contato = require('../models/ContatoModel');

exports.index = async (req, res) => {
  if (req.session.user) {
    const contatos = await Contato.buscaContatos(req.session.user._id);
    res.render('index', { contatos });
  } else {
    console.log('nao esta logado')
    const contatos = null
    res.render('index',{ contatos });
  }

};