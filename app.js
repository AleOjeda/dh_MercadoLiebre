const express = require('express');
const path = require('path');
const app = express();

//Recursos estáticos
app.use(express.static('public'));

///Levanto Servidor
//Para cuando agregue Heroku
//app.listen(process.env.PORT || 4000, () => console.log('El servidor está corriendo en el puerto 3000'));
app.listen(process.env.PORT || 3000  , () => console.log('Servidor Ok', 'http://localhost:3000'));
///Rutas a los recursos */

    //Home
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/home.html'));
});
    //Registro
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/register.html'));
});
    //LOGIN
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/login.html'));
});

