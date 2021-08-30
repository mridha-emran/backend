const express = require("express");
const app= express();
const PORT=3000;

const authors = [
    {   
        author: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    },
    {   
        author: "William Shakespeare", 
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
    },
    {   
        author: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"]
    },
    {   
        author: "Oscar Wilde", 
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    },
];

app.get("/json/authors/:id", (req, res) => {
    var books = req.params.id - 1;

    var author = authors[books]

    var resultObj = {
        name: author.author,
        nationality: author.nationality
    }

    res.json(resultObj)
})

app.get("/json/authors/:id/books",  (req, res)=> {
    var id = req.params.id;

    var author = authors[id - 1];

    res.json({
        books: author.books
    })
})

app.listen(PORT,()=>( console.log(`this server listing port:${PORT}`)))