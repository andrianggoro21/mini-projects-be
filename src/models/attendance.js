module.exports = (sequelize, Sequelize) => {
    const attendance = sequelize.define(
      "attendance",
      {
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
          type: Sequelize.STRING,
        },
        referralCode: {
          type: Sequelize.STRING,
        }
      },
      {
        timestamps: false,
        tableName: "eventAttendance",
      }
    );
  
    attendance.associate = (models) => {
      attendance.hasMany(models.attendanceDetail, { foreignKey: "attendanceId" });
      attendance.hasOne(models.transaction, { foreignKey: "attendanceId" });
    };
  
    return attendance;
  };
  