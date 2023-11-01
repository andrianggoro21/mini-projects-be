module.exports = (sequelize, Sequelize) => {
    const ticket = sequelize.define(
        "tickets", 
        {
          eventId: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
          ticketTypeId: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
          ticketName: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
          price: {
            type: Sequelize.DECIMAL,
          },
          capacity: {
            type: Sequelize.INTEGER,
          },
          discount: {
            type: Sequelize.DECIMAL,
          },
          maxReferral: {
            type: Sequelize.INTEGER,
          },
        },
        {
          timestamps: false,
          tableName: "tickets"
        }
    );

    ticket.associate = (models) => {
        ticket.belongsTo(models.events, {foreignKey: "eventId"});
        ticket.belongsTo(models.tickettypes, {foreignKey: "ticketTypeId"});
    };

    return ticket;
}