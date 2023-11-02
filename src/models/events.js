module.exports = (sequelize, Sequelize) => {
  const events = sequelize.define(
    "events",
    {
      eventName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      categoryId: {
        type: Sequelize.INTEGER,
      },
      locationId: {
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      startDate: {
        type: Sequelize.DATE,
      },
      endDate: {
        type: Sequelize.DATE,
      },
      time: {
        type: Sequelize.TIME,
      },
      eventStatus: {
        type: Sequelize.BOOLEAN,
      },
      description: {
        type: Sequelize.TEXT,
      },
      highlight: {
        type: Sequelize.TEXT,
      },
      include: {
        type: Sequelize.TEXT,
      },
      image: {
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: false,
      tableName: "events",
    }
  );

  events.associate = (models) => {
    events.belongsTo(models.eventlocation, { foreignKey: "locationId" });
    events.belongsTo(models.eventcategory, { foreignKey: "categoryId" });
    events.hasMany(models.tickets, { foreignKey: "eventId" });
  };

  return events;
};
