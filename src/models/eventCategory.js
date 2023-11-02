module.exports = (sequelize, Sequelize) => {
    const eventCategory = sequelize.define(
        "eventcategory", 
        {
          categoryName: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          image: {
            type: Sequelize.STRING,
          },
        },
        {
          timestamps: false,
          tableName: "eventcategory"
        }
    );

    eventCategory.associate = (models) => {
        eventCategory.hasOne(models.events, {foreignKey: "categoryId"});
    };

    return eventCategory;
}