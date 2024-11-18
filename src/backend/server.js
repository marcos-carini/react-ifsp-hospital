// server.js
const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Rota para obter os usuários do arquivo .txt
app.get('/usuarios', (req, res) => {
    fs.readFile('./usuarios.txt', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Erro ao ler o arquivo');
        }

        const usuarios = data
            .split('\n') // Divide o conteúdo em linhas
            .filter(line => line.trim() !== '') // Remove linhas vazias
            .map(line => {
                const campos = line.split(',').map(campo => campo.trim()); // Remove espaços extras
                if (campos.length !== 11) {
                    console.error('Erro: Linha inválida no arquivo:', line);
                    return null;
                }

                const [nome, email, senha, cpf, rg, cep, rua, bairro, crm, tipo, foto] = campos;

                return {
                    nome,
                    email,
                    senha,
                    cpf,
                    rg,
                    cep,
                    rua,
                    bairro,
                    crm: crm === 'null' ? null : crm, // Converte 'null' string em null
                    tipo,
                    foto: foto === 'null' ? null : foto // Converte 'null' string em null
                };
            })
            .filter(usuario => usuario !== null); // Remove entradas inválidas

        res.json(usuarios);
    });
});

// Rota para cadastrar um novo usuário
app.post('/usuarios', (req, res) => {
    const { nome, email, senha, rg, cpf, cep, bairro, rua, crm, tipo, foto } = req.body;

    // Validar os campos obrigatórios no backend
    if (!nome || !email || !senha || !rg || !cpf || !cep || !bairro || !rua || !tipo) {
        return res.status(400).send('Campos obrigatórios não preenchidos!');
    }

    // Formatar a linha para o arquivo
    const novaLinha = `${nome},${email},${senha},${cpf},${rg},${cep},${rua},${bairro},${crm || 'null'},${tipo},${foto || 'null'}\n`;

    // Adicionar ao arquivo usuarios.txt
    fs.appendFile('./usuarios.txt', novaLinha, (err) => {
        if (err) {
            return res.status(500).send('Erro ao salvar o usuário!');
        }

        res.status(201).send('Usuário cadastrado com sucesso!');
    });
});


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
