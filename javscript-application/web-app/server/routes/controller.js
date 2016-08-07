var fs = require('fs');
exports.get = {
	'jResponse' : function(req, res){
		 var contents = fs.readFileSync("./data/"+req.params.jName+'.json');
		 res.send(JSON.parse(contents));
	}
}