var express = require('express');

var app = express();

var port = process.env.PORT || 5000;

var nav = [{
    Link: '/Books',
    Text: 'Books'
            }, {
    Link: '/Authors',
    Text: 'Authors'
    }];

var bookRouter = require('./src/routes/bookRoutes')(nav);

app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'jade');

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Bookshelf',
        nav: nav
    });
});

app.use('/Books', bookRouter);

app.listen(port, function (err) {
    console.log('running server on port ' + port);
});
