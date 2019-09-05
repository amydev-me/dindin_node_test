
const Treasure = (sequelize, DataTypes) => {
   
    var Treasure = sequelize.define('Treasure', {
      latitude: DataTypes.DECIMAL,
      longitude: DataTypes.DECIMAL,
      name: DataTypes.STRING
    }, {
      timestamps:false
    });
    Treasure.associate = function(models) {
      Treasure.hasMany(models.MoneyValue,{foreignKey:'treasure_id'});

    };
    return Treasure;
  };

  module.exports = Treasure;