const express=require('express')
const router=express.Router()
const authMiddleware=require('../middleware/auth.middleware')

router.post("/cast",authMiddleware,castVote)

module.export=router;