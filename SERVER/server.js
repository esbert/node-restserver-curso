require('./CONFIG/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded Midleware
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json Midleware
app.use(bodyParser.json());



app.get('/', function(req, res) {
    //    res.send('Hello World');
    // formato json
    res.json('Hello World');
});

app.get('/usuario', function(req, res) {
    res.json('get Usuario');
});

app.post('/usuario', function(req, res) {

    let body = req.body;

    if (body.nombre === undefined) {

        //        res.status(400).json();
        res.status(400).json({
            oh: false,
            mensaje: 'El nombre es necesrio'
        });
    } else {

        res.json({
            persona: body
        });


    };

});

//http://localhost:3000/usuario/123456
app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
    res.json({
        id
    });
});


app.delete('/usuario', function(req, res) {
    res.json('get Delete');
});

app.listen(3000, () => {
    console.log('Escuchando el puerto: ', process.env.PORT);
});