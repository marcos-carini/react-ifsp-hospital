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


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
