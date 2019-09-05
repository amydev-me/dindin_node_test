const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
const models = require( '../models/index');

app.get('/users', async (req,res) =>{
    const {lat, lng, distance} = req.query;
    try{
        const treasures =  await models.sequelize.query(
            `SELECT id, ( 3959 * acos( cos( radians($lat) ) * cos( radians( latitude ) ) * 
            cos( radians( longtitude ) - radians($lng) ) + sin( radians($lat) ) * 
            sin( radians( latitude ) ) ) ) AS distance FROM treasures HAVING 
            distance < $distance ORDER BY distance`,
            { 
                bind: { lat, lng , distance },
                type: models.sequelize.QueryTypes.SELECT
            }
        );

            res.status(200).send({total:treasures.length, treasures: treasures});
    }catch(e){
        res.status(500);
    }
});

app.get('/findbyvalue', async (req, res)=>{
    const {lat, lng, distance} = req.query;
    try{
        const treasures =  await models.user.finAll({
            attribute:[
                'id',
                [models.sequelize.fn('( 3959 * acos( cos( radians($lat) ) * cos( radians( latitude ) ) * cos( radians( longtitude ) - radians($lng) ) + sin( radians($lat) ) * sin( radians( latitude ) ) ) )'),'distance']
            ]
        })
        // .sequelize.query(
        //     `SELECT id, ( 3959 * acos( cos( radians($lat) ) * cos( radians( latitude ) ) * 
        //     cos( radians( longtitude ) - radians($lng) ) + sin( radians($lat) ) * 
        //     sin( radians( latitude ) ) ) ) AS distance FROM treasures HAVING 
        //     distance < $distance ORDER BY distance`
        //     ,{ bind:{lat, lng , distance},type: models.sequelize.QueryTypes.SELECT});
        res.status(200).send({total:treasures.length, treasures: treasures,status:"success"});
    }catch(e){
        res.status(500);
    }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));