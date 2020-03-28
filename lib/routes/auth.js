const Router = require('express-promise-router');
const jwt = require('express-jwt');
const userController = require('../controllers/userController')

const router = Router();

const getTokenFromHeaders = (req) => {
  const { headers: { authorization } } = req;

  if(authorization && authorization.split(' ')[0] === 'Token') {
    return authorization.split(' ')[1];
  }
  return null;
};

const auth = {
  required: jwt({
    secret: 'secret',
    userProperty: 'payload',
    getToken: getTokenFromHeaders,
  }),
  optional: jwt({
    secret: 'secret',
    userProperty: 'payload',
    getToken: getTokenFromHeaders,
    credentialsRequired: false,
  }),
};

router.get("/login", auth.optional, userController.login)
router.post("/register", auth.optional, userController.register)
router.get("/current", auth.required, userController.current)


module.exports = router