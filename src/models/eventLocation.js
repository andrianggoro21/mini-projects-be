module.exports = (sequelize, Sequelize) => {
    const eventLocation = sequelize.define(
        "eventlocation", 
        {
          locationName: {
            type: Sequelize.STRING,
            allowNull: false,
          }
        },
        {
          timestamps: false,
          tableName: "eventlocation"
        }
    );

    eventLocation.associate = (models) => {
        eventLocation.hasOne(models.events, {foreignKey: "locationId"});
    };

    return eventLocation;
}