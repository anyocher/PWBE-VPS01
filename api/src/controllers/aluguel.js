const con = require('../connections/mysql');


const addAluguel = (req, res) => {
    
    const { placa, matricula, inicio, fim, descricao } = req.body;
    if (placa && matricula && inicio && descricao) {
        con.query('INSERT INTO Aluguel (placa, matricula, inicio, fim, descricao) VALUES (?, ?, ?, ?, ?)',
            [placa, matricula, inicio, fim, descricao],
            (err, result) => {
                if (err) {
                    console.error('Erro ao adicionar manutenção:', err);
                    res.status(500).json({ error: 'Erro ao adicionar manutenção' });
                } else {
                    const newMaintenance = { id: result.insertId, placa, matricula, inicio, fim, descricao };
                    res.status(201).json(newMaintenance);
                }
            });
    } else {
        res.status(400).json({ error: 'Favor enviar todos os campos obrigatórios' });
    }

};


const getAlugueis = (req, res) => {
    con.query('SELECT * FROM Aluguel', (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao listar manutenções' });
        } else {
            res.json(result);
            
        }
    });
}

const getAluguel = (req, res) => {
    const sql = "SELECT * FROM Aluguel WHERE id LIKE ?";
    con.query(sql, `${[req.params.id]}`, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
}


const updateAluguel = (req, res) => {

    const { id, placa, matricula, inicio, fim, descricao } = req.body;
    if (id && placa && matricula && inicio && descricao) {
        con.query('UPDATE Aluguel SET placa = ?, matricula = ?, inicio = ?, fim = ?, descricao = ? WHERE id = ?', 
        [placa, matricula, inicio, fim, descricao, id], 
        (err, result) => {
            if (err) {
                res.status(500).json({ error: err });
            } else {
                res.status(200).json(req.body);
            }
        });
    } else {
        res.status(400).json({ error: 'Favor enviar todos os campos obrigatórios' });
    }

}

const deleteAluguel = (req, res) => {
    
    const { id } = req.params;
    if (id) {
        con.query('DELETE FROM Aluguel WHERE id = ?', [id], (err, result) => {
            if (err) {
                res.status(500).json({ error: err });
            } else {
                if (result.affectedRows === 0) {
                    res.status(404).json({ error: 'Manutenção não encontrada' });
                } else {
                    res.status(200).json({ message: 'Manutenção removida com sucesso' });
                }
            }
        });
    } else {
        res.status(400).json({ error: 'Favor enviar todos os campos obrigatórios' });
    }
    
}

module.exports = {
    addAluguel,
    getAlugueis,
    getAluguel,
    updateAluguel,
    deleteAluguel
}