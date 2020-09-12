const Sequelize = require("sequelize")
const sequelize = require("../../utils/database")

const Inventaris = sequelize.sequelize.define("inventaris",{
    id:{
        type:Sequelize.INTEGER,
          allowNull:false,
          autoIncrement:true,
          primaryKey:true
    },
    vip:Sequelize.INTEGER,
    anggrek:Sequelize.INTEGER,
    hcu:Sequelize.INTEGER,
    icu:Sequelize.INTEGER,
    dahlia2:Sequelize.INTEGER,
    dahliaI:Sequelize.INTEGER,
    melati2:Sequelize.INTEGER,
    tulip2:Sequelize.INTEGER,
    bougenvile2:Sequelize.INTEGER,
    lavender2:Sequelize.INTEGER,
    mawar3:Sequelize.INTEGER,
    mawarI:Sequelize.INTEGER,
    mawarIK:Sequelize.INTEGER,
    melati3:Sequelize.INTEGER,
    tulip3:Sequelize.INTEGER,
    bougenvile3:Sequelize.INTEGER,
    lavender3:Sequelize.INTEGER,
})

module.exports = Inventaris;