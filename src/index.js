const express = require('express');
const app = express();
const port = process.env.PORT;
app.use(express.json());

const models = require( '../models/index');
const { validateRequest } = require( './Validator/treasure');
const { NearestQuery } = require( './utils/helpers');

app.post('/api/nearest-gem',validateRequest(), async (req,res) =>{
    try{
        const {distance, amount} = req.body;

        const arr = amount?amount:[];
        const min = Math.min(...arr);
        const criteria = amount ? [{
                            model: models.MoneyValue,
                            where:{
                                'amt':min
                            } 
                        } ]:[];
        
        const query = NearestQuery(req.body);
                        
        const treasures = await models.Treasure.findAll({
            attributes: [
                'id',
                [
                     models.sequelize.literal(query),'distance'
                ]
            ],
            having: models.sequelize.literal('distance < '+ distance),
           
            include: criteria
        });

        res.status(200).send({count:treasures.length, treasures});
    }catch(e){
        res.status(500);
    }
});

app.post('/api/guess', async (req,res) =>{
    try{
        const {latitude, longitude} = req.body;

        const response = await models.Treasure.findOne({
            where:{
                latitude,longitude
            }
           
        });
        if(response){
            res.status(200).send({message:'You found a gem.'});
        }
        res.status(200).send({message:'Guess it again!'});

    }catch(e){
        res.status(500);
    }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));