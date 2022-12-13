const { Router } = require("express");
const { getDone, postDone } = require("../controllers/done");
// * path: {{url}}/api/done
const router = Router();


router.get("/", getDone);
router.post("/:_id", postDone);


module.exports = router;