const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 8080;
const http = require('http');
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json());
app.use(function (req, res, next) {
	    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
	    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	    res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	    res.header('Access-Control-Allow-Credentials', true);
	    next();
});

app.use('/', express.static(__dirname))
 
app.all('*', (req, res) => { 
	    res.status(200).sendFile(path.join(__dirname ,"/index.html"));
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

