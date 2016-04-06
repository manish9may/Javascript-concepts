var formidable = require("formidable"),
	 multiparty = require('multiparty'),
	 util = require('util');
exports.post = {
	'page001' : function (req, res) {
		var form = new multiparty.Form();
		res.json({ status: true });
	}
}