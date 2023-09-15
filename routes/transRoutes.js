const express=require('express');
const { addTransaction, 
    getAllTransaction,
    editTransaction,
    deleteTransaction
} = require('../controllers/transCtrl');


const router=express.Router();

//post||login
router.post('/add-transaction',addTransaction);


router.post('/edit-transaction',editTransaction);

router.post('/delete-transaction',deleteTransaction);
//post|| register

router.post('/get-transaction',getAllTransaction);

module.exports = router;