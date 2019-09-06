

/**
 * Calculate Distance 
 * @param {*} param0 
 */
const NearestQuery = ({latitude, longitude}) =>{
    return ` 3959 * acos( cos( radians(${latitude}) ) * cos( radians( latitude ) ) * 
                    cos( radians( longitude ) - radians(${longitude}) ) + sin( radians(${latitude}) ) * 
                    sin( radians( latitude ) ) ) `;
}

const convertDistanceToString = (distance) =>{
    let val = 0;
    
    tmp = Math.round(distance * 1000, 2);
    if (tmp > 1000) {
        val = Math.round(distance, 2) + 'K';
    } else {
        val = Math.round(tmp, 2) + 'M';
    }
    return val;
}

module.exports = {
    NearestQuery,
    convertDistanceToString
}