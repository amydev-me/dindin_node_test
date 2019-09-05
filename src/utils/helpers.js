

/**
 * Calculate Distance 
 * @param {*} param0 
 */
const NearestQuery = ({latitude, longitude}) =>{
    return ` 3959 * acos( cos( radians(${latitude}) ) * cos( radians( latitude ) ) * 
                    cos( radians( longitude ) - radians(${longitude}) ) + sin( radians(${latitude}) ) * 
                    sin( radians( latitude ) ) ) `;
}

module.exports = {
    NearestQuery
}