const indikatorModels = require("../../models/indikator/indikatorModels")


exports.getIndikatorTabel = (req,res,next)=>{
    indikatorModels.findAll()
    .then((rows)=>{
        res.render("indikator/tabel.ejs",{
            pageTitle:"Admin RS Paru",
            indikator : rows
        })
    })
    .catch((err)=>{
        const error = new Error(err);
        error.httpStatusCode = 500;
        return next(err);
    })
}

exports.getIndikatorForm=(req,res,next)=>{
    res.render("indikator/form-tambah.ejs",{
        pageTitle:"Admin RS Paru",
        edit:false
    })
}

exports.getIndikatorEditForm=(req,res,next)=>{
    const indikatorId = req.params.id
    indikatorModels.findByPk(indikatorId)
    .then((indi)=>{
        res.render("indikator/form-tambah.ejs",{
            pageTitle:"Admin RS Paru",
            edit:true,
            indikator : indi
        })
    })
    .catch((err)=>{
        const error = new Error(err);
        error.httpStatusCode = 500;
        return next(err);
    })
}

exports.postIndikatorForm= (req,res,next)=>{
    const bor = req.body.bor
    const avlos = req.body.avlos
    const toi = req.body.toi
    const bto = req.body.bto
    const ndr = req.body.ndr
    const gdr = req.body.gdr

    indikatorModels.create({
        bor:bor,
        avlos:avlos,
        toi:toi,
        bto:bto,
        ndr:ndr,
        gdr:gdr
    })
        .then((result)=>{
            console.log("Berhasil di tambah")
            res.redirect("/tabel-indikator")
        })
        .catch((err)=>{
            const error = new Error(err);
            error.httpStatusCode = 500;
            return next(err);
        })
        
}

exports.postIndikatorEditForm = (req,res,next)=>{
    const indikatorId = req.body.id
    const bor = req.body.bor    
    const avlos = req.body.avlos
    const toi = req.body.toi
    const bto = req.body.bto
    const ndr = req.body.ndr
    const gdr = req.body.gdr
    indikatorModels.findByPk(indikatorId)
    .then((indi)=>{
        indi.bor = bor,
        indi.avlos = avlos,
        indi.toi = toi,
        indi.bto = bto,
        indi.ndr = ndr,
        indi.gdr = gdr
        return indi.save()
    })
    .then((result)=>{
        console.log("berhasil di ubah")
        res.redirect("/tabel-indikator")
    })
    .catch((err)=>{
        const error = new Error(err);
      error.httpStatusCode = 500;
      return next(err);
    })
}

exports.postIndikatorDelete = async(req,res,next)=>{
    const indikatorId = req.body.id
    await indikatorModels.destroy({
        where:{id:indikatorId}
    })
        .then((result)=>{
            console.log("Berhasil DI Hapus")
            res.redirect("/tabel-indikator")
        })
        .catch((err)=>{
            const error = new Error(err);
            error.httpStatusCode = 500;
            return next(err);
        })
}