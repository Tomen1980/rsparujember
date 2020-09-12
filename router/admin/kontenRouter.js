const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const kontenContrroller = require("../../controller/admin/kontenController");

router.get("/tabel-konten",auth,kontenContrroller.getKontenTabel);
router.get("/tambah-konten",auth,kontenContrroller.getKontenForm);
router.get("/edit-konten/:id",auth,kontenContrroller.getKontenEdit);
router.post("/tambah-konten",auth,kontenContrroller.postKontenForm);
router.post("/edit-konten",auth, kontenContrroller.postKontenEdit);
router.post("/hapus-konten",auth, kontenContrroller.postKontenDelete);


module.exports = router;