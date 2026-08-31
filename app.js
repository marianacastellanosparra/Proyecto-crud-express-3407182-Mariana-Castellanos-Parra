const express = require('express');
const app = express();
const port = process.env.MIPUERTO || 3003; 
//middlewarc body-parse
app.use(express.json())


app.get('/', (req, res) => {
  res.send('API Rest Full con express');
});

app.get('/api/aprendices', (req, res) => {
res.status(200).json({Mensaje:"lista aprendices"})
});

app.post('/api/aprendices', (req, res) => {
  const datosAprendiz = req.body;
  const edad = req.body.edad;

  if (edad >= 18) {

    return res.status(201).json({ 
      'Mensaje': 'Eres mayor de edad', 
      'Datos': datosAprendiz
    });
  }
  else {

    return res.status(201).json({ 
      'Mensaje': 'Eres menor de edad', 
      'Datos': datosAprendiz
    });
  }

});

app.put('/api/aprendices/:id', (req, res) => {
res.status(200).json({Mensaje:"actualiza aprendices"})
});

app.delete('/api/aprendices', (req, res) => {
res.status(200).json({Mensaje:"eliminado"})
});

app.listen(port, () => {
console.log( `Servidor en funcionamiento en el puerto: http://localhost:${port}`);
});