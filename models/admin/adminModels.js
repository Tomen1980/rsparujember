const Sequelize = require("sequelize");
const sequelize = require("../../utils/database");

const Admin = sequelize.sequelize.define("admin",{
    id:{
        type:Sequelize.INTEGER,
       allowNull:false,
       autoIncrement:true,
       primaryKey:true 
    },
    email:Sequelize.TEXT,
    password:Sequelize.TEXT,
    resetToken:Sequelize.TEXT,
    resetTokenExpiretion:Sequelize.DATE(),
});
module.exports = Admin; 