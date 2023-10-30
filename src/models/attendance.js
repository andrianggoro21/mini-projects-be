module.exports = (sequelize, Sequelize) => {
    const attendance = sequelize.define(
      "attendance",
      {
        eventId: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        ticketId: {
          type: Sequelize.INTEGER,
        },
        userId: {
          type: Sequelize.INTEGER,
        },
        fullName: {
          type: Sequelize.STRING,
        },
        email: {
          type: Sequelize.STRING,
        },
        phoneNumber: {
          type: Sequelize.INTEGER,
        },
        referralCode: {
          type: Sequelize.STRING,
        },
        isCancel: {
          type: Sequelize.BOOLEAN,
        },
      },
      {
        timestamps: false,
        tableName: "eventAttendance",
      }
    );
  
    // attendance.associate = (models) => {
    //   attendance.belongsTo(models.transaction, { foreignKey: "attendanceId" });
    // };
  
    return attendance;
  };
  