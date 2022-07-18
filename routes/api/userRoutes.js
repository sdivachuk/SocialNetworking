const router = require('express').router;

const {
    getUsers,
    getSingleUser,
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser);

module.exports = router;