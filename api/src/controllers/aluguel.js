const con = require('../connect/mysql');

const readAluguel = (req, res) => {
    const sql = "SELECT * FROM aluguel";
    con.query(sql, (err, result) => {
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    });
}

const readAlugueis = (req, res) => {
    const sql = "SELECT * FROM alugel WHERE PLACA LIKE ?";
    con.query(sql,`%${[req.params.placa]}%`, (err, result) => {
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    });
}

module.exports = {
    readAlugueis,
    readAluguel
}