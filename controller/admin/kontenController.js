const kontenModels = require("../../models/konten/kontenModels")
const deleteFile = require("../../utils/file")
// const konten = require("../../models/konten/kontenModels")

exports.getKontenTabel = (req,res,next)=>{
    kontenModels.findAll()
        .then((rows)=>{
            res.render("konten/tabel.ejs",{
                pageTitle:"Admin RS Paru",
                konten : rows
            })
        }).catch((err)=>{
            console.log(err)
            const error = new Error(err);
            error.httpStatusCode = 500;
            return next(err);
        })
}

exports.getKontenForm = (req,res,next)=>{
    res.render("konten/form-tambah.ejs",{
        pageTitle:"Admin RS Paru",
        edit:false
    })
}

exports.getKontenEdit = (req,res,next)=>{
    const kontenId = req.params.id
    kontenModels.findByPk(kontenId)
    .then((result)=>{
        res.render("konten/form-tambah.ejs",{
            pageTitle : "Admin RS Paru",
            edit:true,
            konten : result
        })
    })
    .catch((err)=>{
        console.log(err)
        const error = new Error(err);
        error.httpStatusCode = 500;
        return next(err);
    })
}

exports.postKontenForm = (req,res,next)=>{
    const judul = req.body.judul
    const image = req.file
    const isi = req.body.isi
    if(!image){
        return res.status(422).
        render("konten/form-tambah.ejs",{
            pageTitle:"Admin RS Paru",
            edit:false
        })  
    }
    const imgUrl = image.path
    kontenModels.create({
        judul : judul,
        image : imgUrl,
        isi : isi
    })
        .then((result)=>{
            console.log("Berhasil DI tambah")
            res.redirect("/tabel-konten")
        })
        .catch((err)=>{
            console.log(err)
            const error = new Error(err);
            error.httpStatusCode = 500;
            return next(err);
        })

}

exports.postKontenEdit=(req,res,next)=>{
    const kontenId = req.body.id
    const judul = req.body.judul
    const image = req.file
    const isi = req.body.isi

    kontenModels.findByPk(kontenId)
        .then((konten)=>{
            konten.judul = judul;
            konten.isi = isi;
            if(image){
                deleteFile.deleteFile(konten.image)
                konten.image = image.path
            };
            return konten.save();
        })
                .then((result)=>{
                    console.log("Berhasil di ubah")
                    res.redirect("/tabel-konten")
                })
                .catch((err)=>{
                    const error = new Error(err);
                    error.httpStatusCode = 500;
                    return next(err);
                });
}

exports.postKontenDelete = async(req,res,next)=>{
    const kontenId = req.body.id
   try{
       const kon = await kontenModels.findByPk(kontenId)
       if(!kon){
           return next(new Error("Konten tidak ada"))
       }
       deleteFile.deleteFile(kon.image)
       kon.destroy()
       res.redirect("/tabel-konten")
   }catch(err){
    const error = new Error(err);
    res.status(500).json({
      message: 'Gagal Menghapus'
    })
  }
}