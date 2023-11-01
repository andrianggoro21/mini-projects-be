module.exports = (sequelize, Sequelize) => {
    const ticketType = sequelize.define(
        "tickettypes", 
        {
          typeName: {
            type: Sequelize.STRING,
          },
        },
        {
          timestamps: false,
          tableName: "tickettypes"
        }
    );

    ticketType.associate = (models) => {
        ticketType.hasOne(models.tickets, {foreignKey: "ticketTypeId"});
    };

    return ticketType;
}