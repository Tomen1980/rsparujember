const inventarisModels = require("../../models/inventaris/inventarisModels");
const { Result } = require("express-validator");

exports.getInventarisTable = (req,res,next)=>{
    inventarisModels.findAll()
        .then((rows)=>{
            res.render("inventaris/tabel.ejs",{
                pageTitle:"Admin RS Paru",
                inventaris : rows,
                
            })
        })
        .catch((err)=>{
            const error = new Error(err);
      error.httpStatusCode = 500;
      return next(err);
        })
}
exports.getInventarisForm = (req,res,next)=>{
    res.render("inventaris/form-tambah.ejs",{
        pageTitle:"Admin RS Paru",
        edit : false
    })
}

exports.getInventarisEdit = (req,res,next)=>{
    const inventariId = req.params.id
    inventarisModels.findByPk(inventariId)
        .then((inventaris)=>{
            res.render("inventaris/form-tambah.ejs",{
                pageTitle : "Admin RS Paru",
                edit : true,
                inventaris : inventaris
            })
        })
        .catch((err)=>{
            const error = new Error(err);
            error.httpStatusCode = 500;
            return next(err);
        })
}

exports.postInventarisData = (req,res,next)=>{
    const vip = req.body.vip;
    const anggrek = req.body.anggrek;
    const hcu = req.body.hcu;
    const icu = req.body.icu;
    const dahlia2 = req.body.dahlia2;
    const dahliaI = req.body.dahliaI;
    const melati2 = req.body.melati2;
    const tulip2 = req.body.tulip2;
    const bougenvile2 = req.body.bougenvile2;
    const lavender2 = req.body.lavender2;
    const mawar3 = req.body.mawar3;
    const mawarI = req.body.mawarI;
    const mawarIK = req.body.mawarIK;
    const melati3 = req.body.melati3;
    const tulip3 = req.body.tulip3;
    const bougenvile3 = req.body.bougenvile3;
    const lavender3 = req.body.lavender3;

    inventarisModels.create({
        vip : vip,
        anggrek : anggrek,
        hcu : hcu,
        icu : icu,
        dahlia2:dahlia2,
        dahliaI:dahliaI,
        melati2:melati2,
        tulip2:tulip2,
        bougenvile2:bougenvile2,
        lavender2:lavender2,
        mawar3:mawar3,
        mawarI:mawarI,
        mawarIK:mawarIK,
        melati3:melati3,
        tulip3:tulip3,
        bougenvile3:bougenvile3,
        lavender3:lavender3,
    })
        .then((result)=>{
            console.log("Inventaris Created")
            res.redirect("/tabel-inventaris")
        })
        .catch((err)=>{
            const error = new Error(err);
            error.httpStatusCode = 500;
            return next(err);
        })
}

exports.postInventarisEditData = (req,res,next)=>{
    const inventarisId = req.body.id;
    const vip = req.body.vip;
    const anggrek = req.body.anggrek;
    const hcu = req.body.hcu;
    const icu = req.body.icu;
    const dahlia2 = req.body.dahlia2;
    const dahliaI = req.body.dahliaI;
    const melati2 = req.body.melati2;
    const tulip2 = req.body.tulip2;
    const bougenvile2 = req.body.bougenvile2;
    const lavender2 = req.body.lavender2;
    const mawar3 = req.body.mawar3;
    const mawarI = req.body.mawarI;
    const mawarIK = req.body.mawarIK;
    const melati3 = req.body.melati3;
    const tulip3 = req.body.tulip3;
    const bougenvile3 = req.body.bougenvile3;
    const lavender3 = req.body.lavender3;
    
    inventarisModels.findByPk(inventarisId)
        .then((inven)=>{
            inven.vip = vip;
            inven.anggrek = anggrek;
            inven.hcu = hcu;
            inven.icu = icu;
            inven.dahlia2 = dahlia2;
            inven.dahliaI = dahliaI;
            inven.melati2 = melati2;
            inven.tulip2 = tulip2;
            inven.bougenvile2 = bougenvile2;
            inven.lavender2 = lavender2;
            inven.mawar3 = mawar3;
            inven.mawarI = mawarI;
            inven.mawarIK = mawarIK;
            inven.melati3 = melati3;
            inven.tulip3 = tulip3;
            inven.bougenvile3 = bougenvile3;
            inven.lavender3 = lavender3;

            return inven.save()
        })
            .then((result)=>{
                console.log("Berhasil Edit")
                res.redirect("/tabel-inventaris")
            })

            .catch((err)=>{
                const error = new Error(err);
                error.httpStatusCode = 500;
                return next(err);
            })
}

exports.postInventarisDeleteData = async (req,res,next)=>{
    const inventarisId = req.body.id
   await inventarisModels.destroy({
        where : {id:inventarisId}
    })
    .then((result)=>{
        console.log("berhasil di hapus")
        res.redirect("/tabel-inventaris")
    })
    .catch(err=>{
        const error = new Error(err);
        error.httpStatusCode = 500;
        return next(err);
    })
}