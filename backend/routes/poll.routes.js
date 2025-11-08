const express=require('express');
const { getAll, getById, create, update, deletePoll } = require('../controllers/poll.controller');
const authMiddleware = require('../middleware/auth.middleware');
const adminMiddleware = require('../middleware/admin.middleware');
const router=express.Router();


router.get("/getAll",getAll);
router.get("/getById/:id",getById);

router.post("/create",authMiddleware,adminMiddleware,create);
router.put("/update/:id",authMiddleware,adminMiddleware,update);
router.delete("/delete/:id",authMiddleware,adminMiddleware,deletePoll);

module.exports=router;