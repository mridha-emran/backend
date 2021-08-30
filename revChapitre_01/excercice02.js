const express = require("express");
const app= express();
const PORT=3000;

const arrAuthors = [
    {   id: "1", 
        author: "Lawrence Nowell, UK"
    },
    {   id: "2",
        author: "William Shakespeare, UK"
    },
    {   id: "3",
        author: "Charles Dickens, US"
    },
    {   id: "4",
        author: "Oscar Wilde, UK"
    },
];

app.get('/authors/:id',(req, res)=> {
    
    var name = arrAuthors [req.params.id - 1]
        res.json(name.author);
})

app.listen(PORT,()=>( console.log(`this server listing port:${PORT}`)))