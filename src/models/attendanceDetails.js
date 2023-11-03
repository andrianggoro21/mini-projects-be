module.exports = (sequelize, Sequelize) => {
    const attendanceDetail = sequelize.define(
      "attendanceDetail",
      {
        attendanceId: {
          type: Sequelize.INTEGER,
        },
        ticketId: {
          type: Sequelize.INTEGER,
        },
        ticketTotal: {
          type: Sequelize.INTEGER,
        },
        priceTotal: {
          type: Sequelize.DECIMAL,
        },
      },
      {
        timestamps: false,
        tableName: "attendanceDetails",
      }
    );
  
    attendanceDetail.associate = (models) => {
      attendanceDetail.belongsTo(models.attendance, { foreignKey: "attendanceId" });
    };
  
    return attendanceDetail;
  };
  