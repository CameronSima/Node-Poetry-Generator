var express = 		require('express');
var engines =       require('consolidate');
var mongoose = 		require('mongoose');
var logic =         require('./logic');
var fs = 			require('fs');
var port = 3700;

var app = express();

var prefix = '/home/cameron/Projects/poetry_generator/';
var outfile = '/home/cameron/Projects/poetry_generator/outfile.txt';

// view engine
app.set('views', __dirname + '/views/');
app.set('view engine', 'handlebars');

app.engine('handlebars', engines.handlebars);

app.use(express.static(__dirname + '/public'));

function getMasterFile(selections) {
	for (var i=0; i<=selections.length; i++) {
		fs.readFile(prefix + selections[i], 'utf8', function (err, data) {

		fs.appendFile(outfile, data, function (err) {
			if (err) {
				console.log(err);
			}
		})
	});
	}
};

app.get('/', function (req, res) {
    res.render('mainPage');

    fs.open(outfile, "r", function (err, data) {
    	if (err) {
    		getMasterFile(['whitman.txt', 'sonnets.txt', 'dickinson.txt']);
    	} else {
    		var markov = new logic.Markov(data);
    		console.log(markov)
            

    	}
    })

  
  })




// required for mongoose
var dbConfig = require('./db');
mongoose.connect(dbConfig.url);

var server = app.listen(port);

module.exports = app;


