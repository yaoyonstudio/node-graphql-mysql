'use strict'
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    nickname: DataTypes.STRING,
    sex: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    telephone: DataTypes.STRING,
    avatar: DataTypes.STRING,
    lastlogin: DataTypes.STRING,
    lastloginip: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        console.log(models)
        // associations can be defined here
      }
    }
  })
  User.associate = (models) => models.User.hasMany(models.Post, { foreignKey: 'author', sourceKey: 'id' })
  return User
}
