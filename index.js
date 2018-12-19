var express = require('express');

var app = express();

app.get('/', function(req, res){
	// res.send('This is the home Page!');
	res.sendFile(__dirname+'/views/index.html');
});


app.get('/about', function(req, res){
	// res.send('Some stuff about me will go here.');
	res.sendFile(__dirname+'/views/about.html');
});

app.get('/blog', function(req, res){
	// res.send('A directory of all my blog posts will go here.');
	res.sendFile(__dirname+'/views/blog-directory.html');
});

app.listen(3000, function(){
	console.log('alexa is listening');
})



