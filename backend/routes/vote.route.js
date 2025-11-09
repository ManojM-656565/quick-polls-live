const express=require('express')
const router=express.Router()
const authMiddleware=require('../middleware/auth.middleware')
const {castVote}=require('../controllers/vote.controller')
router.post("/cast",authMiddleware,castVote)

module.exports=router;