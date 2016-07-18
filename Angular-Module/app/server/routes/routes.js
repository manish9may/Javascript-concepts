var express = require('express'),
    router = express.Router(),
    controller = require('./controller'),
    multer  = require('multer'),
    upload = multer();
router.post('/workflow/section/page001',controller.post.page001);
module.exports = router;