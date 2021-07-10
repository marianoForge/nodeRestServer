const { response } = require('express');

const usuariosGet = (req, res = response) => {
  const query = req.query;
  res.json({ message: 'get API - controlador' });
};

const usuariosPut = (req, res = response) => {
  const { id } = req.params;

  res.json({ message: 'put API - controlador', id });
};

const usuariosPost = (req, res = response) => {
  const { nombre, edad } = req.body;

  res.json({ message: 'post API - controlador', nombre, edad });
};

const usuariosDelete = (req, res = response) => {
  res.json({ message: 'delete API - controlador' });
};

const usuariosPatch = (req, res = response) => {
  res.json({ message: 'patch API - controlador' });
};

module.exports = {
  usuariosGet,
  usuariosPatch,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
};
