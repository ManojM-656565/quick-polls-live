const express=require('express');
const { getAll, getById, create, update, deletePoll ,generateResult, getPolls} = require('../controllers/poll.controller');
const authMiddleware = require('../middleware/auth.middleware');
const adminMiddleware = require('../middleware/admin.middleware');
const router=express.Router();


router.get("/getAll",getAll);
router.get("/getById/:id",getById);
router.get("/getPolls",authMiddleware,getPolls)
router.post("/generateResult/:id",authMiddleware,generateResult);

router.post("/create",authMiddleware,create);
router.put("/update/:id",authMiddleware,update);
router.delete("/delete/:id",authMiddleware,deletePoll);

module.exports=router;