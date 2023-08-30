var generator = require('generate-password');

var password = generator.generate({
	length: 6,
	numbers: true,
});

console.log(password);