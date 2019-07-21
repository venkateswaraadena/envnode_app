const express = require('express');
const router = express.Router();

const EnvController = require('../Controller/Env.Controller');

router.route('/setEnviroment/:process/:key/:value').get(EnvController.CreateEnv);

router.route('/getEnviroment/:process').get(EnvController.GetEnv);


module.exports = router;