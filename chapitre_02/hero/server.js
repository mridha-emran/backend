const express = require("express");
const app= express();
const PORT=3000;

app.use(express.json())

const debug=(req,res,next)=>{
    console.log("server")
    next()
}

app.use(debug);


var superheroes = [
    {
        name: "Iron Man",
        power: ["money"],
        color: "red",
        isAlive: true,
        age: 46,
        image: "https://blog.fr.playstation.com/tachyon/sites/10/2019/07/unnamed-file-18.jpg?resize=1088,500&crop_strategy=smart"
    },
    {
        name: "Thor",
        power: ["electricty", "worthy"],
        color: "blue",
        isAlive: true,
        age: 300,
        image: "https://www.bdfugue.com/media/catalog/product/cache/1/image/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9782809465761_1_75.jpg"
    },
    {
        name: "Daredevil",
        power: ["blind"],
        color: "red",
        isAlive: false,
        age: 30,
        image: "https://aws.vdkimg.com/film/2/5/1/1/251170_backdrop_scale_1280xauto.jpg"
    }
]




function transformName(req, res, next) {
    
    if (req.body.name===undefined) {
        error: " add's name"
    }
    req.body.name = req.body.name.toLowerCase()
    next()
};


app.get("/heroes", (req, res) => {
    
    res.json({
        superheroes
    })
})

app.get("/heroes/:name", (req, res) =>{
    const name = req.params.name

    const heroesfind = superheroes.find(elem => elem.name === name)

    res.json({
        heroesfind
    })
})

app.get("/heroes/:name/powers", (req, res) => {
    const name = req.params.name

    const heroesfind = superheroes.find(elem => {return elem.name.toLowerCase() === name.toLowerCase()})
    

    res.json({
        heroesfind: heroesfind.power
    })
})

app.post("/heroes",transformName, (req, res) => {
    
    console.log("body in post", req.body)
    const addheroes = req.body
       superheroes.push(addheroes)

    res.json({
        message: "OK heroes ajouté."
    })
})


app.post("/heroes/:name/powers", (req, res) => {
   
    const name = req.params.name.toLocaleLowerCase()
   

    const  heroesfind = superheroes.find(elem => {
        return name === elem.name.toLowerCase();
    })

    if (heroesfind) {
        const newPower = req.body.power;
        heroesfind.power.push(newPower);
    
    res.json({
        message: "Pouvoir ajouté!"
    })
    } else {
         res.json({
         errorMessage: 'Heros pas trouvé',
    });
  }
})


app.listen(PORT,()=>( console.log(`this server listing port:${PORT}`)))



