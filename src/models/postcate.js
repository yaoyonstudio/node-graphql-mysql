'use strict'
module.exports = (sequelize, DataTypes) => {
  var Postcate = sequelize.define('Postcate', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
        // models.Postcate.hasMany(models.Post, { foreignKey: 'cate', sourceKey: 'id' })
      }
    }
  })
  Postcate.associate = (models) => models.Postcate.hasMany(models.Post, { foreignKey: 'cate', sourceKey: 'id' })
  return Postcate
}
