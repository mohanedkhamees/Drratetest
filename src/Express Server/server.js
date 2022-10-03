let express = require('express');
const createError = require('http-errors');
var path = require('path');
const { options } = require('./route/doctor.routes');
const arzteExpressRoute = require('./route/doctor.routes');

mongoose = require('mongoose');
cors = require('cors');
bodyparser = require('body-parser');
dbConfig = require('./db/database');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.db, {
    useNewUrlParser: true
})
    .then(() => {
        console.log('Database connected')
    },
        error => {
            console.log('Database could not be conneted : ' + error)
        }
    ).catch(e => console.log(e));

const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extends: false }));
app.use(cors());


var userRoute = require('./route/doctor.routes');

app.use('/alldoctor', userRoute);

const port = process.env.PORT || 8080;

const server = app.listen(port, () => {
    console.log('Port connected to :' + port)
})

app.use((req, res, next) => {
    next(createError(404));
})
app.get('/', (req, res) => {
    res.send('invaild endpoint')
})

app.use(function (err, req, res, next) {
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
})

