const express = require("express");
const router = express.Router();
const SiteController = require("../app/controllers/site_controller");
router.get("/search", SiteController.search);
router.get("/", SiteController.home);

module.exports = router;
