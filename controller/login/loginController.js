const crypto = require('crypto');
const bcrypt  = require('bcryptjs');
const adminModels = require("../../models/admin/adminModels")
const { Result } = require("express-validator")

exports.getLogin=(req,res,next)=>{
    res.render("login/page-login.ejs")
}
exports.getRegister = (req,res,next)=>{
    res.render("login/reg.ejs")
}
exports.postLogin=(req,res,next)=>{
    const email = req.body.email
    const password = req.body.password
    adminModels.findAll({
        where:{email:email},
        attributes:["id","email","password"]
    })
        .then((admin)=>{
            if(!admin.length){
                console.log("Tidak Ada Data")
                res.redirect("/login")
            }
            bcrypt.compare(password,admin[0].password)
                .then((match)=>{
                    if(match){
                        req.session.isLogedIn = true
                        req.session.admin = admin
                        return req.session.save((err)=>{
                            console.log(err)
                            res.redirect("/admin")
                        })
                    }
                    console.log("Password Salah")
                res.redirect("/login")
            })
        }).catch((err)=>{
            console.log(err)
        })
}
exports.postReg = (req,res,next)=>{
    const email = req.body.email
    const password = req.body.password
    adminModels.findAll({
        where:{email:email},
        attributes:[
            "id","email","password"
        ]
    })
    .then((adminDoc)=>{
        if(adminDoc.length > 0){
            return res.redirect("/reg")
        }
            bcrypt.hash(password,12)
            .then((hashPassword)=>{
                const admin = adminModels.create({
                    email : email,
                    password : hashPassword
                })
                return admin
            })
            .then(admin=>{
                res.redirect("/login")
                console.log(admin)
            })
            .catch(err=>{
                if(err) throw err
                console.log(err)
            })
    })
    .catch(err=>{
        console.log(err)
        const error = new Error(err);
        error.httpStatusCode = 500;
        return next(err);
    })
}

exports.postLogout = (req,res,next)=>{
    req.session.destroy((err)=>{
        console.log(err)
        res.redirect("/")
    })
}