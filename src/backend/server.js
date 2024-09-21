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

        // Filtra as linhas vazias antes de processar os dados
        const usuarios = data
            .split('\n')
            .filter(line => line.trim() !== '') // Ignora linhas em branco
            .map(line => {
                const [nome, email, senha, cpf, rg, crm, tipo] = line.split(',');
                return { nome, email, senha, cpf, rg, crm, tipo: tipo.trim() }; // Remove o \r do tipo
            });

        res.json(usuarios);
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
