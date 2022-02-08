const { Router } = require('express');
const appConfigService = require('./services/app-config-service');

const apiRoutes = Router();

const auth = require('./api/auth');
const passport = require('./api/passport');
const profile = require('./api/profile');
const car = require('./api/car');
const driver = require('./api/driver');
const ride = require('./api/ride');

apiRoutes.use('/', auth);
apiRoutes.use('/', passport);
apiRoutes.use('/', car);
apiRoutes.use('/', driver);
apiRoutes.use('/', ride);

// Middleware for check JWT token
apiRoutes.use((req, res, next) => {
  //ignore JWT when activate user
  if(req.hasOwnProperty('query')) {
	  if(req.query.hasOwnProperty('code')) {
		  next();
	  }
	  else {
		appConfigService.checkToken(req, res, next);
	}
  } else {
	appConfigService.checkToken(req, res, next);
  }

  // next();
});

apiRoutes.use('/', profile);

module.exports = apiRoutes;
