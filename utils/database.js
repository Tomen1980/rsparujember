const Sequelize = require("sequelize"); 
const session = require("express-session");
const SessionStore = require("express-session-sequelize")(session.Store)
const sequelize = new Sequelize(`${process.env.nameDB}`,`${process.env.userDB}`,`${process.env.passDB}`,{
    dialect:`${process.env.engineDB}`,
    host : `${process.env.hostDB}`,
    multipleStatements:true
});
// console.log(sequelize)

const sequelizeSessionStore = new SessionStore({
    db:sequelize
});

module.exports = {
    sequelize,
    sequelizeSessionStore
}

// {
//     "env":{
//         "nameDB" : "agungjum_rsparu" ,
//         "userDB": "agungjum",
//         "engineDB": "mysql",
//         "hostDB":"localhost"
//     }
// }