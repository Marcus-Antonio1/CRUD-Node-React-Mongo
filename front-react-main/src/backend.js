// Coloquei todas as funções para acessar o backend aqui
import axios from "axios";

const URL_BACK = 'http://localhost:5500/produtos';


export const converteProduto = (p) => {
  return {
    id: p.id ? p.id : p._id, // o spring trabalha com id o node trabala com _id
    nome: p.nome,
    valor: p.valor,
    foto: p.foto
  }
};

export const getProdutos = () => {
  return axios.get(URL_BACK).then(res => {
    return res.data.map(converteProduto);
  });
};

export const getProdutoPorId = (id) => {
  return axios.get(URL_BACK + "/" + id).then(res => {
    return converteProduto(res.data);
  });
};

export const salvarProduto = (form) => {
  return axios.post(URL_BACK, form);
};

export const excluirProduto = (id) => {
  return axios.delete(URL_BACK + "/" + id);
};