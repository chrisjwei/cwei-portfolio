var express = require('express');

var app = express();

var recent_work = [
    {
        id: 0,
        tags: "INTERNSHIP",
        date: "SUMMER 2016",
        title: "Microsoft Azure Customer Insights",
        description: "Graph database design using Spark GraphX and Titan Database"
    },
    {
        id: 1,
        tags: "INTERNSHIP",
        date: "SUMMER 2015",
        title: "Applied Predictive Technologies",
        description: "placeholder"
    },
    {
        id: 2,
        tags: "HACKATHON / ML / SCRAPING",
        date: "FALL 2016",
        title: "Newsbot",
        description: "A hackathon project for scraping news articles"
    }
    ];



app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'))
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'))
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'))
app.use('/fonts', express.static(__dirname + '/node_modules/bootstrap/dist/fonts'))

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.render('pages/index', {recent_work: recent_work});
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});