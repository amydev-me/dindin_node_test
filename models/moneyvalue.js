'use strict';
module.exports = (sequelize, DataTypes) => {
  const MoneyValue = sequelize.define('MoneyValue', {
    treasureId: DataTypes.INTEGER,
    amt: DataTypes.INTEGER
  }, {});
  MoneyValue.associate = function(models) {
    MoneyValue.belongsTo(models.Treasure)
  };
  return MoneyValue;
};