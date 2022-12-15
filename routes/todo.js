const { Router } = require("express");
const { getTodos, postTodo, deleteTodo } = require("../controllers/todo");
// * path: {{url}}/api/todo

const router = Router();

router.get("/",getTodos);
router.post("/",postTodo);
router.delete("/:_id",deleteTodo);


module.exports = router;