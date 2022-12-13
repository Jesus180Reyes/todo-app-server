const { Router } = require("express");
const { getTaskInProgress, postTaskInProgress} = require("../controllers/inProgress");
// * path: {{url}}/api/inProgress

const router = Router();

router.get("/",getTaskInProgress);
router.post("/:_id", postTaskInProgress);

module.exports  = router