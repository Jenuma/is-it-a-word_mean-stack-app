var router = require("express").Router();

router.use("/search", require("./controllers/search-controller"));

module.exports = router;
