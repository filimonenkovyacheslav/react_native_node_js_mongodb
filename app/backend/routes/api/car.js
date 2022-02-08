const router = require('express').Router();
const Driver = require('../../models/car');
const bcrypt = require('bcryptjs');
const utilityService = require('../services/utility-service');
const SchemaValidatorService = require('../services/schema-validator-service');
const moment = require('moment');
const appConfigService = require('../services/app-config-service');

/**
 * @api {post} /api/register_car Register new Car
 * @apiName Register Car
 * @apiGroup Car
 *
 * @apiVersion 1.0.0
 *
 * @apiParam (Body) {String} number Car's number.
 * @apiParam (Body) {String} model Car's model.
 * @apiParam (Body) {String} color Car's color.
 * @apiParam (Body) {String} body_type Car's body type.
 * @apiParam (Body) {Number} mileage Car's mileage.
 * @apiParam (Body) {Number} issue_year Car's issue year.
 * @apiParam (Body) {Boolean} isPersonal is it presonal Car or company car?
 *
 * @apiParamExample {json} Body:
 *      {
 *        "number": "AC1285",
 *        "brand": "Audi",
 *        "model": "A6",
 *        "color": "red",
 *        "body_type": "sedan",
 *        "mileage": "10000",
 *        "issue_year": "1997",
 *        "isPersonal": "true",
 *      }
 *
 * @apiSuccess {String} success indicates the status of procedure.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "_id": "5d7969d239396c65ca989657",
 *        "number": "AC1285",
 *        "brand": "Audi",
 *        "model": "A6",
 *        "color": "red",
 *        "body_type": "sedan",
 *        "mileage": "10000",
 *        "issue_year": "1997",
 *        "isPersonal": "true"
 *     }
 */
router.post('/register_car', async(req, res) => {
    await appConfigService.extractUsersInfoFromToken(req);

    try {
        const schemaValidatorService = new SchemaValidatorService();
        await schemaValidatorService.customSchemaValidation('register_car', req.body);

        const {
				number,
				model,
        brand,
				color,
				body_type,
				mileage,
				issue_year,
				isPersonal
			} = req.body;

            const newCar = new Car({ number, model, brand, color, body_type, mileage, issue_year, isPersonal });

            const car = await newCar.save();

            res.status(201).json(car);
    } catch (e) {
        utilityService.handleError(res, e);
    }
});


/**
 * @api {get} /car/:id Get info about Car
 * @apiName Car Profile
 * @apiGroup Car
 *
 * @apiVersion 1.0.0
 *
 * @apiParam (id) {String} car's id
 *
 * @apiSuccess {String} success indicates the status of procedure.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "_id": "5d7969d239396c65ca989657",
 *        "number": "AC1285",
 *        "brand": "Audi",
 *        "model": "A6",
 *        "color": "red",
 *        "body_type": "sedan",
 *        "mileage": "10000",
 *        "issue_year": "1997",
 *        "isPersonal": "true"
 *     }
 *
 * @apiErrorExample Car not exists:
 *     HTTP/1.1 403 Error
 *     {
 *       "success": false,
 *       "message": "Car not exisists in DB."
 *     }
 */
router.get('/car/:id', async(req, res) => {
    await appConfigService.extractUsersInfoFromToken(req);
        const car = await Car.findOne({ _id: id });

        if (car) {
            return res.status(201).json(car);
		} else {
            return res.status(403).json({
                success: false,
                message: 'Car not exists in DB.'
            });
		}
});



/**
 * @api {post} /api/update_car Update Info about Car
 * @apiName Update Car
 * @apiGroup Car
 *
 * @apiVersion 1.0.0
 *
 * @apiParam (Body) {String} number Car's number.
 * @apiParam (Body) {String} model Car's model.
 * @apiParam (Body) {String} color Car's color.
 * @apiParam (Body) {String} body_type Car's body type.
 * @apiParam (Body) {Number} mileage Car's mileage.
 * @apiParam (Body) {Number} issue_year Car's issue year.
 * @apiParam (Body) {Boolean} isPersonal is it presonal Car or company car?
 *
 * @apiParamExample {json} Body:
 *      {
 *        "number": "AC1285",
 *        "brand": "Audi",
 *        "model": "A6",
 *        "color": "red",
 *        "body_type": "sedan",
 *        "mileage": "10000",
 *        "issue_year": "1997",
 *        "isPersonal": "true",
 *      }
 *
 * @apiSuccess {String} success indicates the status of procedure.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "_id": "5d7969d239396c65ca989657",
 *        "number": "AC1285",
 *        "brand": "Audi",
 *        "model": "A6",
 *        "color": "red",
 *        "body_type": "sedan",
 *        "mileage": "10000",
 *        "issue_year": "1997",
 *        "isPersonal": "true"
 *     }
 *
 * @apiErrorExample Car not exists:
 *     HTTP/1.1 403 Error
 *     {
 *       "success": false,
 *       "message": "Car not exisists in DB."
 *     }
 */
router.post('/update_car', async(req, res) => {
    await appConfigService.extractUsersInfoFromToken(req);
    try {
        const schemaValidatorService = new SchemaValidatorService();
        await schemaValidatorService.customSchemaValidation('register_car', req.body);

        const {
				id,
				number,
				model,
        brand,
				color,
				body_type,
				mileage,
				issue_year,
				isPersonal
			} = req.body;

        const acar = await Car.findOne({ _id: id });

		if(acar) {

            const newCar = { number, brand, model, color, body_type, mileage, issue_year, isPersonal };

			let car = await	Car.findOneAndUpdate({ _id: id }, newCar, {new: false} );

            res.status(201).json(car);
        } else {
            return res.status(403).json({
                success: false,
                message: 'Car not exists in DB.'
            });
		}
    } catch (e) {
        utilityService.handleError(res, e);
    }
});


/**
 * @api {get} /car_list Get info about Car list
 * @apiName Car Profile
 * @apiGroup Car
 *
 * @apiVersion 1.0.0
 *
 * @apiParam (id) {String} Car's id
 *
 * @apiSuccess {String} success indicates the status of procedure.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {"_id":"5e3bf0ec7d8f86498c3ff148",
 *        "isPersonal":true,
 *        "number":"BM 777 W",
 *        "brand": "Audi",
 *        "model": "A6",
 *        "color":"Black",
 *        "body_type":"Limuzin",
 *        "mileage":10250,
 *        "issue_year":2015,
 *        "__v":0
 *      }
 *
 * @apiErrorExample Car not exists:
 *     HTTP/1.1 403 Error
 *     {
 *       "success": false,
 *       "message": "Car list is not exisists in DB."
 *     }
 */
router.get('/car_list', async(req, res) => {
    await appConfigService.extractUsersInfoFromToken(req);
    const carList = await Car.find();

    if (carList) {
       return res.status(201).json(carList);
		} else {
       return res.status(403).json({
          success: false,
          message: 'Car list is not exists in DB.'
       });
		}
});


module.exports = router;
