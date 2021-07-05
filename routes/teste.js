const express = require('express');
const router = express.Router();
const teste=require('../controllers/teste');
router.get('/',teste.review)



module.exports = router;
