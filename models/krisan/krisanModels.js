const Sequelize = require("sequelize")
const sequelize = require("../../utils/database")

const krisan = sequelize.sequelize.define("krisan",{
    id:{
        type:Sequelize.INTEGER,
       allowNull:false,
       autoIncrement:true,
       primaryKey:true 
    },
    nama:Sequelize.STRING,
    email:Sequelize.STRING,
    tlpn:Sequelize.INTEGER,
    isi:Sequelize.TEXT
});
module.exports = krisan; 