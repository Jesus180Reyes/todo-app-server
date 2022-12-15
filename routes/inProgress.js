const { Router } = require("express");
const { getTaskInProgress, postTaskInProgress, deleteInProgress} = require("../controllers/inProgress");
// * path: {{url}}/api/inProgress

const router = Router();

router.get("/",getTaskInProgress);
router.post("/:_id", postTaskInProgress);
router.delete("/:_id",deleteInProgress);

module.exports  = router