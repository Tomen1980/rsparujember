const Sequelize = require("sequelize")
const sequelize = require("../../utils/database")

const Indikator = sequelize.sequelize.define("indikator",{
    id:{
        type:Sequelize.INTEGER,
       allowNull:false,
       autoIncrement:true,
       primaryKey:true 
    },
    bor:Sequelize.STRING,
    avlos:Sequelize.STRING,
    toi:Sequelize.STRING,
    bto:Sequelize.STRING,
    ndr:Sequelize.STRING,
    gdr:Sequelize.STRING
});
module.exports = Indikator; 