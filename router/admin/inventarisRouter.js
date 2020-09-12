const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth")
const inventarisContrroller = require("../../controller/admin/inventarisController")

router.get("/tabel-inventaris",auth,inventarisContrroller.getInventarisTable)
router.get("/tambah-inventaris",auth,inventarisContrroller.getInventarisForm)
router.get("/edit-inventaris/:id",auth,inventarisContrroller.getInventarisEdit)
router.post("/tambah-inventaris",auth,inventarisContrroller.postInventarisData)
router.post("/edit-inventaris",auth,inventarisContrroller.postInventarisEditData)
router.post("/hapus-inventaris",auth,inventarisContrroller.postInventarisDeleteData)


module.exports = router;