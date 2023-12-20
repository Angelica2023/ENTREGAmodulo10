const express = require ('express')
const mongoose = require ('mongoose')
const colors = require('colors')
const port = 3005;

const Tareas = mongoose.model('tareas', new mongoose.Schema({
    tipo: String,
    estado: String,
  }))

  

const app = express()

mongoose.connect('mongodb+srv://angelicaalp:AANPlearn2023@clusterdev.vubuc6j.mongodb.net/MODULO10?retryWrites=true&w=majority')

//mongodb+srv://angelicaalp:AANPlearn2023@clusterdev.vubuc6j.mongodb.net/MODULO10?retryWrites=true&w=majority

//mensaje de bienvenida
app.get('/', async (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.status(200);
    res.send("<h1>SI FUNCIONA</h1>");
})

// listando tareas
app.get('/listar', async (req, res) => {
    console.log('listando las TAREAS')
    const tareas = await Tareas.find();
    return res.send(tareas)
  })

// crear un animal
// app.get('/crear', async (req, res) => {
//     console.log('creando...')
//     await Tareas.create({ tipo: 'Modulo 1', estado: 'Entregada' })
//     await Tareas.create({ tipo: 'Modulo 2', estado: 'Pendiente' })
//     res.status(200);
//     return res.send('Created...')
//   })

// app.listen(3000, () => console.log('listening...'.bgCyan))
// https://www.npmjs.com/package/colors

app.listen(port, ()=> {
    console.log("Servidor corriendo en el puerto:".bgBlue + " " + `http://localhost:${port}`.underline)
})