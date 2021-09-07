const express = require("express");
const app= express();
const PORT=3000;
const dotenv=require("dotenv")
dotenv.config({
	path: "./config.env",
});
 const mongoose=require("mongoose")
app.use(express.json())

mongoose.connect(process.env.DB, {useNewUrlParser: true,})
	.then(() => {
		console.log("Connected to MongoDB !");
	});

const debug=(req,res,next)=>{
    console.log(" debug:server")
    next()
}

app.use(debug);

const heroShema = new mongoose.Schema({
    name: String,
    power: Array,
    color: String,
    isAlive: Boolean,
    age: Number,
    image: String,

})

const hero = mongoose.model('hero', heroShema)

hero.insert = [
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

const testName = (req, res, next) => {
    const name = req.body.name;
      console.log("test param",req.body.name)
    const newsuperHeros = superheroes.findIndex(elem => {
        return elem.name.toLowerCase() === name
    })
    console.log("test name",newsuperHeros);

    if (newsuperHeros===-1) {
        next();
    } else {
        res.json({
            errorMessage: "Heros dont exist"
        })
    }
    
  };



  const deletehero = (req, res, next) => {
    const heroesremove = req.body.name;
    superHeroes.map((elem) => {
      if (elem.name.toLowerCase().splice !== heroesremove.name) {
          message: "Ce héros n'existe pas !",
          res.json({
        });
      }
    });
  };

app.get("/heroes",async (req, res) => {
    const superHeroe=await hero.find()
    res.json({
         message:"ok",
         data: superHeroe
    })
})

app.get("/heroes/:name",async (req, res) =>{
    const name = req.params.name
    const heroesfind = await hero.find({name:name})

    res.json({
        heroesfind
    })
})

app.get("/heroes/:name/powers",async (req, res) => {
    const name = req.params.name

    // const heroesfind = superheroes.find(elem => {return elem.name.toLowerCase() === name.toLowerCase()})
    
    const heroesfind = await hero.findOne({name:name})
      heroesfind.updateOne({power:name})

    res.json({
        heroesfind: heroesfind
    })
})

app.post("/heroes",async(req, res) => {
    
    console.log("body in post", req.body)
   
    const addheroes =await hero.create(req.body)
      
    res.json({
        message: "OK heroes ajouté."
    })
})


app.post("/heroes/:name/powers", async (req, res) => {
   
    const name = req.params.name.toLocaleLowerCase();
    const heroesfind = await hero.findOne({name :name})
   

    

    if (heroesfind) {
        const newPower = req.body.power;
        hero.power.push(newPower);
        heroesfind.updateOne( { powers:newPower })
 
    
    res.json({
        message: "power add"
    })
    } else {
         res.json({
         errorMessage: 'Hero not found',
    });
  }
})
 app.delete("/heroes/:name",deletehero,(req,res)=>{

    const name = req.params.name.toLowerCase();
    const  deleteheroes = superheroes.find(elem => {
        return  elem.name.toLowerCase().splice!==name;

    })
    superHeroes = deleteheroes ;
    console.log(deleteheroes)
    // if (deleteheroes) {
    //     superheroes.splice(name, 1);
        
    // } 
    //     res.json({
    //         message: `Hero ${name} effacé correctement`
    //     })
    // }
})



app.listen(PORT,()=>( console.log(`this server listing port:${PORT}`)))



