const MoneyValue = (sequelize, DataTypes) => {
  const MoneyValue = sequelize.define('MoneyValue', {
    treasure_id: DataTypes.INTEGER,
    amt: DataTypes.INTEGER
  }, {
    timestamps:false
  });
  MoneyValue.associate = function(models) {
    MoneyValue.belongsTo(models.Treasure,{
      foreignKey:'treasure_id'
    })
  };
  return MoneyValue;
};


module.exports = MoneyValue;