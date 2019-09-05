const User = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    timestamps:false
  });
  User.associate = function(models) {
  };
  return User;
};

module.exports = User;