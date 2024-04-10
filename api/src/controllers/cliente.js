const con = require('../connect/mysql');

const readCliente = (req, res) => {
    const sql = "SELECT * FROM cliente";
    con.query(sql, (err, result) => {
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    });
}

const readClientes = (req, res) => {
    const sql = "SELECT * FROM cliente WHERE CPF LIKE ?";
    con.query(sql,`%${[req.params.cpf]}%`, (err, result) => {
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    });
}

module.exports = {
    readClientes,
    readCliente
}