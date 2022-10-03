var express = require('express');
const app = express();
const doctorExpressRoute = express.Router();
let docotrSchema = require('../model/doctor.model');

doctorExpressRoute.route('/').get((req, res) => {
    docotrSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
}),

    doctorExpressRoute.route('/add').post((req, res, next) => {

        docotrSchema.create(req.body, (error, data) => {
            if (error) {
                return next(error)
            } else {
                res.json(data)
            }
        })


    }
    );
/*doctorExpressRoute.get('/', function (req, res) {
    res.render('doctor.model');
});*/

module.exports = doctorExpressRoute;