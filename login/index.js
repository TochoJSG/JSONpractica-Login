//Codigo de arranque a la app
const express = require('./app_users');
const app = express();

async function main(){
	await app_users.listen(app.get('port'));//Puerto 3000
	console.log('Server on port ',app.get('port'));
}
main();