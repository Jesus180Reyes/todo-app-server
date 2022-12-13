const { Router } = require("express");
const { getTodos, postTodo } = require("../controllers/todo");
// * path: {{url}}/api/todo

const router = Router();

router.get("/",getTodos);
router.post("/",postTodo);


module.exports = router;