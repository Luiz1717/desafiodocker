const express = require('express');
const app = express();

app.get('/usuarios', (req, res) => {
    res.json([
        { id: 1, nome: "Luiz" },
        { id: 2, nome: "Maria" }
    ]);
});

app.listen(3000, () => {
    console.log("API de Usuários rodando na porta 3000");
});
