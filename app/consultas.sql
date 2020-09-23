SELECT l.cod, l.dt_hr_prevista AS 'dt_hr_entrega', CONCAT(e.nome, ", ", e.numero) AS 'endereco_entrega', CONCAT(m.nome, " ", m.sobrenome) AS 'responsavel', l.placa_veiculo
FROM locacao l
JOIN cliente c ON l.cod_cliente = c.cod
JOIN motorista m ON m.cpf = c.cpf_motorista
JOIN filial f ON l.filial_destino = f.cnpj
JOIN endereco e ON f.cod_endereco = e.cod;

SELECT t.cod, COUNT(*) AS 'qtd'
FROM tipo_veiculo t
JOIN veiculo v ON t.cod = v.cod_tipo_veiculo
WHERE v.disponivel = 1
GROUP BY t.cod
ORDER BY COUNT(*) DESC, t.cod;

SELECT f.cnpj_filial, COUNT(f.placa_veiculo) AS 'qtd'
FROM filial_veiculos f
JOIN veiculo v ON f.placa_veiculo = v.placa
WHERE v.disponivel = 1
GROUP BY cnpj_filial;