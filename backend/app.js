const express = require('express')
const app = express()
const routes = require('./rutas/routes')
const cors = require('cors')

app.use(express.json());
app.use(cors());
app.use('/', routes);

// Puerto que deseas verificar
const PORT= 5173;


app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))