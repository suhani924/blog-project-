const express = require("express");
const router = express.Router();

const dataController = require("../controllers/dataController");

router.get("/form", dataController.formPage);
router.post("/insertData", dataController.insertData);
router.get("/table", dataController.tablePage);

router.get("/edit/:id", dataController.editPage);
router.post("/update/:id", dataController.updateData);

router.get("/delete/:id", dataController.deleteData);

module.exports = router;