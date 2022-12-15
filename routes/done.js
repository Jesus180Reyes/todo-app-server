const { Router } = require("express");
const { getDone, postDone, deleteDone } = require("../controllers/done");
// * path: {{url}}/api/done
const router = Router();


router.get("/", getDone);
router.post("/:_id", postDone);
router.delete("/:_id",deleteDone);



module.exports = router;