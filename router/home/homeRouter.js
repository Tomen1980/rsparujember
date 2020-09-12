const express = require("express");
const router = express.Router();
const homeController = require("../../controller/home/homeController")


router.get("/",homeController.getIndex)
router.get("/akun",homeController.getAkun)
router.get("/tentang",homeController.getTentang)
router.get("/dokter",homeController.getDokter)
router.get("/berita",homeController.getBerita)
router.get("/igd",homeController.getIgd)
router.get("/rawatJ",homeController.getRawatJ)
router.get("/rawatI",homeController.getRawatI)
//penunjang
router.get("/LayananP",homeController.getLayananP)
router.get("/simrs",homeController.getSimrs)
router.get("/ipsrs",homeController.getIpsrs)
router.get("/radioL",homeController.getRadioL)
router.get("/lab",homeController.getLab)
router.get("/farmasi",homeController.getFarmasi)
router.get("/loketT",homeController.getLoketT)


router.get("/LayananU",homeController.getLayananU)
router.get("/detail-berita/:id",homeController.getDetailBerita)
router.get("/jadwal",homeController.getJadwal)
router.post("/ppid",homeController.postPpid)
router.post("/krisan",homeController.postKrisan)


module.exports = router;