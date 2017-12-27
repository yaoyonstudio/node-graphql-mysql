'use strict'
module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    author: DataTypes.INTEGER,
    cate: DataTypes.INTEGER,
    excerpt: DataTypes.STRING,
    source: DataTypes.STRING,
    featured_img: DataTypes.STRING,
    thumb_up: DataTypes.INTEGER,
    thumb_down: DataTypes.INTEGER,
    content: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
        // models.Post.belongsTo(models.Postcate, { foreignKey: 'cate', targetKey: 'id' })
      }
    }
  })
  Post.associate = (models) => models.Post.belongsTo(models.User, { foreignKey: 'author', targetKey: 'id' })
  Post.associate = (models) => models.Post.belongsTo(models.Postcate, { foreignKey: 'cate', targetKey: 'id' })
  return Post
}
