const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth")
const adminContrroler = require("../../controller/admin/adminController");

router.get("/admin",auth,adminContrroler.getAdminIndex)
router.post("/hapus-krisan",auth,adminContrroler.postKrisanDel)
router.get("/tabel-ppid",auth,adminContrroler.getPpid)
router.post("/hapus-ppid",auth,adminContrroler.postPpidDel)
module.exports = router;