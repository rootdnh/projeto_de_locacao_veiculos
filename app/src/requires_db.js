const con = require('./db')



const getAllClientes = (req, res ) => {
    try {
        con.query('SELECT * FROM cliente', (error, response) => {
            if (error) throw error
            res.status(200).send({response})
        })
    } catch (error) {
        res.status(500).send({ response: error })
    }
}


const req1 = (req, res) =>{
    try {
        con.query("SELECT l.cod, l.dt_hr_prevista AS 'dt_hr_entrega', CONCAT(e.nome, ', ', e.numero) AS 'endereco_entrega', CONCAT(m.nome, ' ', m.sobrenome) AS 'responsavel', l.placa_veiculo   FROM locacao l JOIN cliente c ON l.cod_cliente = c.cod JOIN motorista m ON m.cpf = c.cpf_motorista JOIN filial f ON l.filial_destino = f.cnpj   JOIN endereco e ON f.cod_endereco = e.cod", (error, response)=>{
            if (error) throw error
            res.status(200).send({response})
        })

    } catch (error) {
        console.log("errou")
    }
}


const req2 = (req, res) =>{
    try {
        con.query("SELECT t.cod, COUNT(*) AS 'qtd' FROM tipo_veiculo t JOIN veiculo v ON t.cod = v.cod_tipo_veiculo WHERE v.disponivel = 1 GROUP BY t.cod ORDER BY COUNT(*) DESC, t.cod", (error, response)=>{
            if (error) throw error
            res.status(200).send({response})
        })

    } catch (error) {
        console.log("errou")
    }
}


const req3 = (req, res) =>{
    try {
        con.query("SELECT f.cnpj_filial, COUNT(f.placa_veiculo) AS 'qtd' FROM filial_veiculos f JOIN veiculo v ON f.placa_veiculo = v.placa WHERE v.disponivel = 1 GROUP BY cnpj_filial", (error, response)=>{
            if (error) throw error
            res.status(200).send({response})
        })

    } catch (error) {
        console.log("errou")
    }
}

const all_location = (req,res) => {
    try {
        con.query("SELECT * FROM locacao",(error, response)=>{
            if(error) throw error
            res.status(200).send({response})
        })
    } catch (error) {
        
    }
}

const location = (req, res) =>{

    const value = [[req.body.dt_hr_locacao, req.body.dt_hr_prevista, req.body.cod_cliente, req.body.filial_destino, req.body.cod_tipo_veiculo_desejado]]
    try {
        con.query('INSERT INTO locacao(dt_hr_locacao,dt_hr_prevista,cod_cliente,filial_destino, cod_tipo_veiculo_desejado) VALUES ?', [value], (error, response)=>{
            if (error) throw error
            res.status(200).send({response})
        })

    } catch (error) {
        console.log("errou")
    }
}


module.exports = {getAllClientes, req1, req2, req3, location, all_location}