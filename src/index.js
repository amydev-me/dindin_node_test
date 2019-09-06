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

        const criteria = amount ? [{
                            model: models.MoneyValue,
                            where: { amt: amount }
                        } ]:[];
        
        const query = NearestQuery(req.body);

        const response = await models.Treasure.findAll({
            attributes: [
                'id',
                [
                    models.sequelize.literal(query),'distance'
                ]
            ],
            having: models.sequelize.literal('distance < '+distance),
            include: criteria
        });
        res.status(200).send({count:response.length, treasures:response});
    }catch(e){
        res.status(500);
    }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));