const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth")
const indikatorController = require("../../controller/admin/indikatorController");

router.get("/tambah-indikator",auth,indikatorController.getIndikatorForm);
router.get("/tabel-indikator",auth,indikatorController.getIndikatorTabel);
router.get("/edit-indikator/:id",auth,indikatorController.getIndikatorEditForm)

router.post("/tambah-indikator",auth,indikatorController.postIndikatorForm);
router.post("/edit-indikator",auth,indikatorController.postIndikatorEditForm)
router.post("/hapus-indikator",auth,indikatorController.postIndikatorDelete)
module.exports = router;