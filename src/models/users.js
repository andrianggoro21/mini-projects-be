module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define(
        "user",
        {
         fullname: {
            type: Sequelize.STRING,
            alloNull: false,
         },
         email: {
            type: Sequelize.STRING,
            allowNull: false,
         },
         password: {
            type: Sequelize.STRING,
            alloNull: false,
         },
         roleId: {
            type: Sequelize.INTEGER,
         },
         point: {
            type: Sequelize.DECIMAL,
          },
         avatar: {
            type: Sequelize.STRING,
         },
        },
        {
            timestamps: false,
            tableName: "users",
        }
    );

    user.associate = (models) => {
       user.belongsTo(models.role, { foreignKey: "roleId"});
      //  user.hasMany(models.event, { foreignKey: "userId"});
    };

    return user;
};