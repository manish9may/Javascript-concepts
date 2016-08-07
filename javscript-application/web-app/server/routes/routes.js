var express = require('express'),
    router = express.Router(),
    controller = require('./controller');
router.get('/workflow/section/:jName',controller.get.jResponse);
module.exports = router;