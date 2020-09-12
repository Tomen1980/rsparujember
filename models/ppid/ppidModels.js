const Sequelize = require("sequelize")
const sequelize = require("../../utils/database")

const ppid = sequelize.sequelize.define("ppid",{
    id:{
        type:Sequelize.INTEGER,
       allowNull:false,
       autoIncrement:true,
       primaryKey:true 
    },
    nama:Sequelize.STRING,
    email:Sequelize.STRING,
    tgl:Sequelize.DATE,
    tlpn :Sequelize.STRING,
    image:Sequelize.TEXT,
    isi:Sequelize.TEXT
});
module.exports = ppid; 