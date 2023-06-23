const express = require('express');
const { cribList, addCrib, editCrib, deleteCrib } = require('../controllers/cribs');
const router = express.Router();

router.get('/cribs', cribList);
router.post('/cribs', addCrib);
router.put('/cribs/:id', editCrib);
router.delete('/cribs/:id', deleteCrib);

module.exports = router;