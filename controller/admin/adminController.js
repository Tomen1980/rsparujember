const indikatorModels = require("../../models/indikator/indikatorModels");
const krisanModels = require("../../models/krisan/krisanModels");
const ppidModels = require("../../models/ppid/ppidModels");
const deleteFile = require("../../utils/file");
exports.getAdminIndex = async (req,res,next)=>{
    await indikatorModels.findAll({
        order:[
            ["id","DESC"]
        ],
        limit : 1
    })
        .then((indi)=>{
            krisanModels.findAll()
                .then((kris)=>{
                    res.render("admin/admin.ejs",{
                        pageTitle : "ADMIN RS Paru Jember",
                        indikator : indi,
                        krisan : kris
                    })
                })
            })
            
                    .catch((err)=>{
                        console.log(err)
                        const error = new Error(err);
                        error.httpStatusCode = 500;
                        return next(err);
        })
}

exports.getPpid = (req,res,next)=>{
    ppidModels.findAll()
    .then((result)=>{
        res.render("ppid/tabel.ejs",{
            pageTitle : "Admin RS Paru Jember",
            ppid : result
        })
    })
    .catch((err)=>{
        const error = new Error(err);
        error.httpStatusCode = 500;
        return next(err);
    })
}

exports.postKrisanDel = async(req,res,next)=>{
    const krisId = req.body.id
    await krisanModels.destroy({
        where :{id:krisId}
    })
    .then((result)=>{
        console.log("Berhasil di hapus")
        res.redirect("/admin")
    })
    .catch((err)=>{
        console.log(err)
        const error = new Error(err);
        error.httpStatusCode = 500;
        return next(err);
    })
}
exports.postPpidDel = async(req,res,next)=>{
  const ppID = req.body.id
  try {
      const ppid = await ppidModels.findByPk(ppID)
      if(!ppid){
        return next(new Error("Konten tidak ada"))
      }
      deleteFile.deleteFile(ppid.image)
      ppid.destroy()
      res.redirect("/tabel-ppid")
  } catch (err) {
    const error = new Error(err);
    res.status(500).json({
      message: 'Gagal Menghapus'
    })
  }
}

