// var express = require('express');
// var app = express();
// var port = 3000;


// app.get('/authors/:id/books/', (req, res) => {
//     var authors = req.params.id;
//     var book = "";

//     switch (authors) {

//         case "1":
//             book = "Beowulf";
//             break;

//         case "2":
//             book = "Hamlet, Othello, Romeo and Juliet, MacBeth";
//             break;

//         case "3":
//             book = "Oliver Twist, A Christmas Carol";
//             break;

//         case "4":
//             book = "The Picture of Dorian Gray, The Importance of Being Earnest";
//             break;

//         default:
//             book = "not found"
//             break;
//     }

//     res.json({
//         books: book,
//     });
// });

// app.listen(port, function () {
//     console.log('Serveur lancé et en écoute dans le port: ' + port);
// });