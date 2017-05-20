var express = require('express');

var bookRouter = express.Router();

var router = function (nav) {

    var books = [
        {
            title: 'War and Peace',
            genre: 'Historical Fiction',
            author: 'Lev Nikolayevich Tolstoy',
            read: false
    },
        {
            title: 'Silas Marner',
            genre: 'Victorian Social Commentary',
            author: 'George Eliot',
            read: false
    }
];

    bookRouter.route('/')
        .get(function (req, res) {
            res.render('bookListView', {
                title: 'Bookshelf: Books',
                nav: nav,
                books: books
            });
        });

    bookRouter.route('/:id')
        .get(function (req, res) {
            var id = req.params.id;
            res.render('bookView', {
                title: 'Bookshelf: Books',
                nav: nav,
                book: books[id]
            });
        });

    return bookRouter;
};


module.exports = router;
