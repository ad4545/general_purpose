const { registerAdmin, loginAdmin } = require("../controllers/auth/authAdmin");

const router = require("express").Router();

router.post("/registerAdmin", registerAdmin);
router.post("/login", loginAdmin);

module.exports = router;
