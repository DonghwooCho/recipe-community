const express = require('express');
const router = express.Router();
const memberController = require('../controllers/member-controller');

router.post('/', memberController.selectAllMembers);
router.post('/search', memberController.selectSearchMemberById);
router.post('/signin', memberController.selectLoginMember);
router.post('/signup', memberController.insertMember); 

router.put('/', memberController.updateMember); // FRONT 구현 안함
router.delete('/', memberController.deleteMember); // FRONT 구현 안함

module.exports = router;