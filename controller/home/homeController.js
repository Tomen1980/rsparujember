const ppidModels = require("../../models/ppid/ppidModels")
const krisanModels = require("../../models/krisan/krisanModels")
const kontenModels = require("../../models/konten/kontenModels")
const inventarsModels = require("../../models/inventaris/inventarisModels")
const indikatorModels = require("../../models/indikator/indikatorModels")
const session = require("express-session")
const mailer = require("nodemailer");
const router = require("../../router/home/homeRouter");
const templateMail = require("../../utils/mail")

let transport = mailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
      user: 'simrspj@gmail.com',
      pass: 'ixkgrufjbntqpvyl'
    },
    tls: { rejectUnauthorized: false }
  });

exports.getIndex = (req,res,next)=>{
    inventarsModels.findAll(
        {
            limit : 1,
            order:[
                ["id","DESC"]
            ]
        }
    ).then((rows)=>{
        return indikatorModels.findAll({
            limit : 1,
            order:[
                ["id","DESC"]
            ]
        }).then((indi)=>{
            return kontenModels.findAll({
                limit : 3,
                order:[
                    ["id","DESC"]
                ]
            }).then((kon)=>{
                res.render("home/index.ejs",{
                    inventaris:rows,
                    indikator : indi,
                    konten:kon
                })
            })
        })
    }).catch((err)=>{
        const error = new Error(err);
        error.httpStatusCode = 500;
        return next(err);
    })
}

exports.getAkun = (req,res,next) =>{
    res.render("login/page-login.ejs")
}

exports.getTentang = (req,res,next)=>{
    res.render("home/tentang/tentang.ejs")
}

exports.getDokter = (req,res,next) =>{
    res.render("home/dokter/dokter.ejs")
}

exports.getInventaris = (req,res,next)=>{
    res.render("home/inventaris/data.ejs")
}
exports.getIgd = (req,res,next)=>{
    res.render("home/layanan/igd.ejs")
}
exports.getRawatJ = (req,res,next)=>{
    res.render("home/layanan/rawat_jalan.ejs")
}
exports.getRawatI = (req,res,next)=>{
    res.render("home/layanan/rawat_inap.ejs")
}
exports.getLayananU = (req,res,next)=>{
    res.render("home/layanan/layanan_utama.ejs")
}
exports.getJadwal = (req,res,next)=>{
    res.render("home/jadwal/jadwal.ejs")
}

//Penunjnag
exports.getLayananP = (req,res,next)=>{
    res.render("home/layanan/penunjang/penunjang.ejs")
}
exports.getSimrs = (req,res,next)=>{
    res.render("home/layanan/penunjang/simrs.ejs")
}
exports.getIpsrs = (req,res,next)=>{
    res.render("home/layanan/penunjang/ipsrs.ejs")
}
exports.getRadioL = (req,res,next)=>{
    res.render("home/layanan/penunjang/radiologi.ejs")
}
exports.getLab = (req,res,next)=>{
    res.render("home/layanan/penunjang/laboratorium.ejs")
}
exports.getFarmasi = (req,res,next)=>{
    res.render("home/layanan/penunjang/farmasi.ejs")
}
exports.getLoketT = (req,res,next)=>{
    res.render("home/layanan/penunjang/loketTerpadu.ejs")
}
exports.getLayananP = (req,res,next)=>{
    res.render("home/layanan/penunjang/penunjang.ejs")
}

exports.getBerita = (req,res,next)=>{
    kontenModels.findAll()
    .then((rows)=>{
        res.render("home/berita/berita.ejs",{
            konten:rows
        })
    })
    .catch((err)=>{
        console.log(err)
        const error = new Error(err);
        error.httpStatusCode = 500;
        return next(err);
    })
}
exports.getDetailBerita = (req,res,next)=>{
   const kontenId = req.params.id
    kontenModels.findByPk(kontenId)
    .then((result)=>{
        res.render("home/berita/detail-berita.ejs",{
            konten:result
        })
    })
    .catch((err)=>{
        console.log(err)
        const error = new Error(err);
        error.httpStatusCode = 500;
        return next(err);
    })
}

exports.postPpid = (req,res,next)=>{
    const nama = req.body.nama
    const email = req.body.email
    const image = req.file
    const tgl = req.body.tgl
    const tlpn = req.body.tlpn
    const isi = req.body.isi
    const imgUrl = image.path
    ppidModels.create({
        nama : nama,
        email : email,
        image : imgUrl,
        tgl : tgl,
        tlpn : tlpn,
        isi : isi
    })
    .then((ppid)=>{
        res.redirect("/")
            return transport.sendMail({
                to:"agungjumantoroandrian@gmail.com",
                from:email,
                subject:'PPID',
                html: `<body>
                <table>
                    <tr>
                        <td>nama : </td>
                        <td>`+nama+`</td>
                    </tr>
                    <tr>
                        <td>email : </td>
                        <td>`+email+`</td>
                    </tr>
                    <tr>
                        <td>No : </td>
                        <td>`+tlpn+`</td>
                    </tr>
                    <tr>
                        <td>tgl Kejadian : </td>
                        <td>`+tgl+`</td>
                    </tr>
                </table>
                <p>
                `+isi+`
                </p>
            </body>`,
                attachments: [
                    {
                        path: imgUrl
                    }
                ]
            })
        })
            .then((result)=>{
                transport.sendMail({
                    to:email,
                    from:"simrspj@gmail.com",
                    subject:'Pelaporan',
                    html: templateMail.ppid
                })
        })
        .catch((err)=>{
            console.log(err)
            transport.sendMail({
                to:email,
                from:"simrspj@gmail.com",
                subject:'Pelaporan Gagal',
                html: `<h2>Gagal mengirim ppid</h2>
                <p>Silahkan kirim pesan lagi nanti atau hubungi pegawai RS Paru </p>
            `
            })
            res.redirect("/")
        })
    }

exports.postKrisan =(req,res,next)=>{
    const nama = req.body.nama
    const email = req.body.email
    const tlpn = req.body.tlpn
    const isi = req.body.isi
    krisanModels.create({
        nama : nama,
        email : email,
        tlpn : tlpn,
        isi : isi
    })
    .then((kris)=>{
        res.redirect("/")
            return transport.sendMail({
                to:"agungjumantoroandrian@gmail.com",
                from:email,
                subject:'Kritik & Saran',
                html: `<body>
                <table>
                    <tr>
                        <td>nama : </td>
                        <td>`+nama+`</td>
                    </tr>
                    <tr>
                        <td>email : </td>
                        <td>`+email+`</td>
                    </tr>
                    <tr>
                        <td>No : </td>
                        <td>`+tlpn+`</td>
                    </tr>
                </table>
                <p>
                `+isi+`
                </p>
            </body>`
            })
        })
            .then((result)=>{
                transport.sendMail({
                    to:email,
                    from:"simrspj@gmail.com",
                    subject:'Tanggapan',
                    html: templateMail.krisan
                })
        })
        .catch((err)=>{
            console.log(err)
            transport.sendMail({
                to:email,
                from:"simrspj@gmail.com",
                subject:'Tanggapan ',
                html: `<h2>Gagal mengirim kritik & saran</h2>
                    <p>Silahkan kirim pesan lagi nanti atau hubungi pegawai RS Paru </p>
                `
            })
            res.redirect("/")
        })
}