const express = require('express');
const port = 3000;

const app = express();


  app.listen(port, () => {
    console.log('Server started on port: ' +port);
  });

  
app.get('/authors/:id', (req, res) => {
    let authors = req.params.id;
    let city = "";
    let country = "";

    switch (authors) {
        case "1":
            city="Lawrence Nowell"
            country="uk"
            break;
        
            case "2":
                city="William Shakespeare"
                country="uk"
                break;

            case "3":
            city="Charles Dickens"
            country="us"
            break;

            case "4":
            city="Oscar Wilde"
            country="us"
            break;

            default:
            city = "not found"
            country = "none"
            break;

    }

    res.json({
        name: city,
        country: country,
    });
});
