const express = require('express');
const app = express();

require('./database');


// ABLE TO READ JSON
app.use(express.json());


// ROUTES
app.use('/weapon', require('./src/routes/weapon.routes'));
app.use('/atribute', require('./src/routes/atribute.routes'));
app.use('/artificer', require('./src/routes/artificer.routes'));


// DEFINE PORT
app.listen(8000, () =>{
    console.log('Helloo servidor.');
})