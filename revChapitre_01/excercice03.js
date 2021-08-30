const express = require("express");
const app= express();
const PORT=3000;

const arrAuthors = [
    {   id: "1", 
        books: "Beowulf",
    },
    {   id: "2",
        books: "Hamlet, Othello, Romeo and Juliet, MacBeth",
    },
    {   id: "3",
        books: "Oliver Twist, A Christmas Carol",
    },
    {   id: "4",
        books: "The Picture of Dorian Gray, The Importance of Being Earnest",
    },
];

 app.get("/authors/:id/books",(req,res)=>{
      var author = arrAuthors[req.params.id-1]

      res.json(author.books)
})



 app.listen(PORT,()=>( console.log(`this server listing port:${PORT}`)))