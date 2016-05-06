var sway = require('sway');
sway
	.create({
		definition: 'specs/index.yaml'
	})
	.then(function success(api) {
		console.log(api.validate());
	})
	.catch(function failure(err) {
		console.log(err);
	});
