module.exports = (sequelize, Sequelize) => {
    const tickets = sequelize.define(
        "tickets", 
        {
          detilId: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
          typeId: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
          userId: {
            type: Sequelize.INTEGER,
            allowNull: false,
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

    tickets.associate = (models) => {
        tickets.belongsTo(models.tickettypes, {foreignKey: "typeId"});
    };

    return tickets;
}