const Sequelize = require("sequelize")
const sequelize = require("../../utils/database")

const konten = sequelize.sequelize.define("konten",{
    id:{
        type:Sequelize.INTEGER,
       allowNull:false,
       autoIncrement:true,
       primaryKey:true 
    },
    judul:Sequelize.STRING,
    image:Sequelize.TEXT,
    isi:Sequelize.TEXT
});
module.exports = konten; 