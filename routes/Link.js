const express = require('express');
const router = express.Router();
const LinkController = require('../controllers/Link.controller');

router.post('/', LinkController.postURLsHandler);

router.get('/:hash', LinkController.getURLHandlerRedirect);
router.get('/:hash/info', LinkController.getURLHandler);


module.exports = router;
