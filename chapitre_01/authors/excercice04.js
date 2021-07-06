// const express = require('express');
// const app = express();

// const port = 3000;
// app.listen(port, () => {
//     console.log('Server started on port: ' + port);
// });

// var authors = [
//     {
//         name: "Lawrence Nowell",
//         nationality: "UK",
//         books: ["Beowulf"]
//     },
//     {
//         name: "William Shakespeare",
//         nationality: "UK",
//         books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
//     },
//     {
//         name: "Charles Dickens",
//         nationality: "US",
//         books: ["Oliver Twist", "A Christmas Carol"]
//     },
//     {
//         name: "Oscar Wilde",
//         nationality: "UK",
//         books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
//     },
// ]

// app.get('/json/authors/:id', (req, res) => {
//     var newId = authors.req.params.id;

    

//     var newObj = {
//         name: newId.name,
//         nationality: newId.nationality
//     }


//     res.json(newObj)
// });
// app.get('/json/authors/:id/books', (req, res) => {

//     var secNewId = req.params.id;

    
//     res.json({
//         books : secNewId.books
//     })
// });