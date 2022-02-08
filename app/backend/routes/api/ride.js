const router = require('express').Router();
const Ride = require('../../models/ride');
const SchemaValidatorService = require('../services/schema-validator-service');
const utilityService = require('../services/utility-service');
const appConfigService = require('../services/app-config-service');

/**
 * @api {post} /api/new_ride Register new Ride
 * @apiName Register Ride
 * @apiGroup Ride
 *
 * @apiVersion 1.0.0
 *
 * @apiParam (Body) {String} routeName Ride's route name.
 * @apiParam (Body) {String} pointOfDeparture Ride's point of departure.
 * @apiParam (Body) {String} pointOfArrival Ride's point of arrival.
 * @apiParam (Body) {Number} mileage Ride's mileage.
 * @apiParam (Body) {String} driverName Ride's driver name.
 * @apiParam (Body) {String} carNumber Ride's car number.
 * @apiParam (Body) {Date} startTime Ride's start time.
 * @apiParam (Body) {Date} endTime Ride's end time.
 * @apiParam (Body) {Boolean} isPrivate Ride is private or not.
 *
 * @apiParamExample {json} Body:
 *      {
 *        "routeName": "route name",
 *        "pointOfDeparture": "example address",
 *        "pointOfArrival": "example address",
 *        "mileage": "102",
 *        "driverName": "Marus Duhel",
 *        "carNumber": "K 777 CM",
 *        "startTime": "1576076342270",
 *        "endTime": "1576076342270",
 *        "isPrivate": false
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
 *       "email": "5d7969d239396c65ca989657",
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
router.post('/new_ride', async(req, res) => {
    await appConfigService.extractUsersInfoFromToken(req);
    try {
        // const schemaValidatorService = new SchemaValidatorService();
        // await schemaValidatorService.customSchemaValidation('new_ride', req.body);

        const { routeName, pointOfDeparture, pointOfArrival, mileage, driverName, carNumber, startTime, endTime, isPrivate } = req.body;

        const newRide = new Ride({ routeName, pointOfDeparture, pointOfArrival, mileage, driverName, carNumber, startTime, endTime, isPrivate  });

        const ride = await newRide.save();

        res.status(201).json(ride);
    } catch (e) {
        utilityService.handleError(res, e);
    }
});


/**
 * @api {get} /ride_list Get info about Ride list
 * @apiName Ride Profile
 * @apiGroup Ride
 *
 * @apiVersion 1.0.0
 *
 * @apiParam (id) {String} Ride's id
 *
 * @apiSuccess {String} success indicates the status of procedure.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "active": false,
 *       "_id": "5d7969d239396c65ca989657",
 *       "name": "5d7969d239396c65ca989657",
 *       "email": "5d7969d239396c65ca989657",
 *       "password": "$2a$10$pPDb/ZiGtRNDBflQfs6yC.rxSIy9basL4daAXDYUSCt38AFdfT3VT5BEitc.",
 *       "createdDate": "2019-09-11T21:40:34.248Z"
 *     }
 *
 * @apiErrorExample Ride not exists:
 *     HTTP/1.1 403 Error
 *     {
 *       "success": false,
 *       "message": "Ride list is not exisists in DB."
 *     }
 */
router.get('/ride_list', async(req, res) => {
  console.log(req);
    await appConfigService.extractUsersInfoFromToken(req);
    const rideList = await Ride.find();

    if (rideList) {
       return res.status(201).json(rideList);
		} else {
       return res.status(403).json({
          success: false,
          message: 'Ride list is not exists in DB.'
       });
		}
});


module.exports = router;
