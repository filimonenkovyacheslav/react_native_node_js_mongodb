const router = require('express').Router();
const Driver = require('../../models/driver');
const bcrypt = require('bcryptjs');
const utilityService = require('../services/utility-service');
const SchemaValidatorService = require('../services/schema-validator-service');
const moment = require('moment');
const appConfigService = require('../services/app-config-service');

/**
 * @api {post} /api/register_driver Register new Driver
 * @apiName Register Driver
 * @apiGroup Driver
 *
 * @apiVersion 1.0.0
 *
 * @apiParam (Body) {String} name Driver's name.
 * @apiParam (Body) {String} email Driver's email.
 *
 * @apiParamExample {json} Body:
 *      {
 *        "name": "Nick",
 *        "email": "example@example.com",
 *      }
 *
 * @apiSuccess {String} success indicates the status of procedure.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "active": false,
 *       "_id": "5d7969d239396c65ca989657",
 *       "name": "5d7969d239396c65ca989657",
 *       "surname": "5d7969d239396c65ca989657",
 *       "email": "5d7969d239396c65ca989657",
 *       "phone": "5d7969d239396c65ca989657",
 *       "createdDate": "2019-09-11T21:40:34.248Z"
 *     }
 *
 * @apiErrorExample Email-Exists:
 *     HTTP/1.1 403 Error
 *     {
 *       "success": false,
 *       "message": "Email address is already exists in DB."
 *     }
 */
router.post('/register_driver', async(req, res) => {
    try {
        const schemaValidatorService = new SchemaValidatorService();
        await schemaValidatorService.customSchemaValidation('register_driver', req.body);
        await appConfigService.extractUsersInfoFromToken(req);

        const { name, surname, email, phone } = req.body;

        const driver = await Driver.findOne({ email });

        if (driver) {
            return res.status(403).json({
                success: false,
                message: 'Email address is already exists in DB.'
            });
        } else {
            utilityService.isEmail(email, 'It is not an email string.', 422);

            const newDriver = new Driver({ name, surname, email, phone });

            const driver = await newDriver.save();

            res.status(201).json(driver);
        }
    } catch (e) {
        utilityService.handleError(res, e);
    }
});


/**
 * @api {get} /driver/:id Get info about driver
 * @apiName Driver Profile
 * @apiGroup Driver
 *
 * @apiVersion 1.0.0
 *
 * @apiParam (id) {String} driver's id
 *
 * @apiSuccess {String} success indicates the status of procedure.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "active": false,
 *       "_id": "5d7969d239396c65ca989657",
 *       "name": "5d7969d239396c65ca989657",
 *       "surname": "5d7969d239396c65ca989657",
 *       "email": "5d7969d239396c65ca989657",
 *       "phone": "5d7969d239396c65ca989657",
 *       "password": "$2a$10$pPDb/ZiGtRNDBflQfs6yC.rxSIy9basL4daAXDYUSCt38AFdfT3VT5BEitc.",
 *       "createdDate": "2019-09-11T21:40:34.248Z"
 *     }
 *
 * @apiErrorExample Driver not exists:
 *     HTTP/1.1 403 Error
 *     {
 *       "success": false,
 *       "message": "Driver not exisists in DB."
 *     }
 */
router.get('/driver/:id', async(req, res) => {
    await appConfigService.extractUsersInfoFromToken(req);

    const driver = await Driver.findOne({ _id: id });

    if (driver) {
        return res.status(201).json(driver);
    }
    else {
        return res.status(403).json({
            success: false,
            message: 'Driver not exists in DB.'
        });
    }
});



/**
 * @api {post} /api/update_driver Update Info about Driver
 * @apiName Update Driver
 * @apiGroup Driver
 *
 * @apiVersion 1.0.0
 *
 * @apiParam (Body) {String} name Driver's name.
 * @apiParam (Body) {String} email Driver's email.
 * @apiParam (Body) {String} password Driver's password.
 *
 * @apiParamExample {json} Body:
 *      {
 *        "name": "Nick",
 *        "surname": "Dow",
 *        "email": "example@example.com",
 *        "phone": "(098) 12345678",
 *        "password": "some-password",
 *      }
 *
 * @apiSuccess {String} success indicates the status of procedure.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "active": false,
 *       "_id": "5d7969d239396c65ca989657",
 *       "name": "5d7969d239396c65ca989657",
 *       "surname": "5d7969d239396c65ca989657",
 *       "email": "5d7969d239396c65ca989657",
 *       "phone": "5d7969d239396c65ca989657",
 *       "password": "$2a$10$pPDb/ZiGtRNDBflQfs6yC.rxSIy9basL4daAXDYUSCt38AFdfT3VT5BEitc.",
 *       "createdDate": "2019-09-11T21:40:34.248Z"
 *     }
 *
 * @apiErrorExample Email-Exists:
 *     HTTP/1.1 403 Error
 *     {
 *       "success": false,
 *       "message": "Email address is already exists in DB."
 *     }
 */
router.post('/update_driver', async(req, res) => {
    try {
        const schemaValidatorService = new SchemaValidatorService();
        await schemaValidatorService.customSchemaValidation('register_driver', req.body);
        await appConfigService.extractUsersInfoFromToken(req);

        const { id, name, surname, email, password, phone } = req.body;

        const driver = await Driver.findOne({ _id: id });

        if (driver) {
            utilityService.isEmail(email, 'It is not an email string.', 422);

			const drivers = await Driver.findOne({ email });
			let d;
			for(d in drivers) {
				if(d._id != id) {
					return res.status(403).json({
						success: false,
						message: 'Email address is already exists in DB.'
					});
				}
			}

			if(password) {
				const salt = await bcrypt.genSalt(10);
				const hash = await bcrypt.hashSync(password, salt);

				driver.password = hash;
			}

			//store driver
			let driver1 = await	Driver.findOneAndUpdate({ _id: id }, driver, {new: false} );

            res.status(201).json(driver1);
        } else {
            return res.status(403).json({
                success: false,
                message: 'Driver not exists in DB.'
            });
		}
    } catch (e) {
        utilityService.handleError(res, e);
    }
});


/**
 * @api {get} /driver_list Get info about Driver list
 * @apiName Driver Profile
 * @apiGroup Driver
 *
 * @apiVersion 1.0.0
 *
 * @apiParam (id) {String} Driver's id
 *
 * @apiSuccess {String} success indicates the status of procedure.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *       "active": false,
 *       "_id": "5d7969d239396c65ca989657",
 *       "name": "5d7969d239396c65ca989657",
 *       "surname": "5d7969d239396c65ca989657",
 *       "email": "5d7969d239396c65ca989657",
 *       "phone": "5d7969d239396c65ca989657",
 *       "password": "$2a$10$pPDb/ZiGtRNDBflQfs6yC.rxSIy9basL4daAXDYUSCt38AFdfT3VT5BEitc.",
 *       "createdDate": "2019-09-11T21:40:34.248Z"
 *      }
 *
 * @apiErrorExample Driver not exists:
 *     HTTP/1.1 403 Error
 *     {
 *       "success": false,
 *       "message": "Driver list is not exisists in DB."
 *     }
 */
router.get('/driver_list', async(req, res) => {
    await appConfigService.extractUsersInfoFromToken(req);
    const driverList = await Driver.find();

    if (driverList) {
       return res.status(201).json(driverList);
		} else {
       return res.status(403).json({
          success: false,
          message: 'Driver list is not exists in DB.'
       });
		}
});

module.exports = router;
