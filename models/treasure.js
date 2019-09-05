'use strict';
module.exports = (sequelize, DataTypes) => {
  const Treasure = sequelize.define('Treasure', {
    latitude: DataTypes.DECIMAL,
    longtitude: DataTypes.DECIMAL,
    name: DataTypes.STRING
  }, {});
  Treasure.associate = function(models) {
    // Treasure.hasMany(models.MoenyValue)
  };
  return Treasure;
};