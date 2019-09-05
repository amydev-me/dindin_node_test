const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
const models = require( '../models/index');

/**
 * Validate Input Request
 * @param {Valid} fields 
 */
const validateQuery = (fields) =>{
    return (req, res, next) => {
        for(const field of fields) {
            if(!req.query[field]) { 
                return res
                    .status(400)
                    .send({'status':'invalid_request',message:'Invalid request'});
            }
        }
        next();
    };
}
/**
 * Calculate Distance 
 * @param {*} param0 
 */
const NearestQuery = ({latitude, longitude}) =>{
    return ` 3959 * acos( cos( radians(${latitude}) ) * cos( radians( latitude ) ) * 
                    cos( radians( longitude ) - radians(${longitude}) ) + sin( radians(${latitude}) ) * 
                    sin( radians( latitude ) ) ) `;
}

app.get('/api/nearest-gem', validateQuery(['latitude', 'longitude','distance']), async (req,res) =>{
    try{

        const {distance, amount} = req.query;

        /**
         *Amount field is optional
         */
        const criteria = amount ? [{
                            model: models.MoneyValue,
                            where: { amt: amount }
                        } ]:[];
        
        const query = NearestQuery(req.query);
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
    };
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));