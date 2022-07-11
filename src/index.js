const express = require('express');
const path = require('path');
const morgan = require('morgan');

const handlebars = 'express-handlebars';
const { engine } = require('express-handlebars');

/*  require controller*/
const route = require('./routes');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
// app.use(morgan('combined'));

//XMLHttpRequest, fetch, axios
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
app.engine(
    'hbs',
    engine({
        extname: 'hbs',
    }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/resources/views'));

app.get('/', (req, res) => {
    res.render('home');
});

//Route init
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
