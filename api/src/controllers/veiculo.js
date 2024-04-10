const con = require('../connect/mysql');

const readVeiculos = (req, res) => {
    const sql = "SELECT * FROM veiculo";
    con.query(sql, (err, result) => {
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    });
}

const readVeiculo = (req, res) => {
    const sql = "SELECT * FROM veiculo WHERE placa LIKE ?";
    con.query(sql,`%${[req.params.placa]}%`, (err, result) => {
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    });
}

module.exports = {
    readVeiculos,
    readVeiculo
}