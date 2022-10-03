const { prototype } = require('events');
let express = require('express');
const createError = require('http-errors');
const { options } = require('./Drrate/routes/arzte.routes');
const arzteExpressRoute = require('./Drrate/routes/arzte.routes');
path = require('path');
mongoose = require('mongoose');
cors = require('cors');
bodyparser = require('body-parser');
dbConfig = require('./Drrate/db/database');

var url = 'mongodb://localhost:27017/Drrate';

//mongoose.promise = global.promise;

mongoose.connect(dbConfig.db, options, {
    useNewUrlParser: true
})
    .then(() => {
        console.log('Database connected')
    },
        error => {
            console.log('Database could not be conneted : ' + error)
        }
    ).catch(e => console.log(e));

app.use(express.json());
const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extends: false
}))
app.use(cors());


var userRoute = require('./Drrate/routes/arzte.routes');

app.use('/endpoint', userRoute);

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
