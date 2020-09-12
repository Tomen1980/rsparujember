const express = require('express');
const path = require("path");
const app = express();
const fs = require("fs");
const port = process.env.PORT || 3000 ;
const bodyParser = require("body-parser");
const session = require("express-session");
const flash = require("connect-flash");
const csrf = require("csurf");
const multer = require("multer");
// const helmet = require("helmet");
// const compression = require('compression');
const morgan = require("morgan");
const Timer = require("./middleware/timeOut")

//routesss
const sequelize = require("./utils/database");
const homeRouter = require("./router/home/homeRouter");
const loginRouter = require("./router/login/loginRouter");
const adminRouter = require("./router/admin/adminRouter");
const inventarisRouter = require("./router/admin/inventarisRouter");
const indikatorRouter = require("./router/admin/indikatorRouter");
const kontenRouter = require("./router/admin/kontenRouter")
const ErrorController = require("./controller/404/errorController")
// Database
const adminModels = require("./models/admin/adminModels");
const inventarisModels = require("./models/inventaris/inventarisModels");
const indikatorModels = require("./models/indikator/indikatorModels");
const kontenModels = require("./models/konten/kontenModels");
const ppidModels = require("./models/ppid/ppidModels");
const krisanModels = require("./models/krisan/krisanModels");
// USE
    /*MULTER*/
const fileStorage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"images/konten")
    },
    filename:(req,file,cb) =>{
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const fileFilter = (req,file,cb)=>{
    if(
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg" 
    ){
        cb(null, true);
    }else{
        cb(null, false);
    }
}
app.use(bodyParser.urlencoded({
    extended : false
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"public")));
// app.use(helmet())
// app.use(compression())
app.use(express.static("public"));
app.use(multer({
    storage: fileStorage,
    fileFilter: fileFilter
  }).single('image'));
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use(
    session({
        secret:"thisIsVerySecret",
        resave:false,
        saveUninitialized:false,
        store:sequelize.sequelizeSessionStore,
        cookie:{maxAge:1000*60*60}
    })
)

// SET
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// app.set("view engine","ejs");
// app.set("views","views");

//Router
app.use(homeRouter)
app.use(loginRouter)
app.use(adminRouter)
app.use(inventarisRouter)
app.use(indikatorRouter)
app.use(kontenRouter)

app.use(ErrorController.errorController);
app.use(ErrorController.errorController500);

app.use((error, req, res, next) => {
  res.status(500).render('404/500', {
    pageTitle: 'An Error Has Occurred',
    path: '/500'
  })
})

//PORT
sequelize.sequelize.sync()
    .then((result)=>{
        const server = app.listen(port)
        console.log("server is Running")
    })
    .catch((err)=>{
        console.log(err)
    })
