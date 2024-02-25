const router = require('express').Router();
const userService = require('../service/userService');
const { extractErrorMsgs } = require('./../utils/errorHandler');

router.get('/login', (req, res) => {
    res.render('user/login');
})

router.get('/register', (req, res) => {
    res.render('user/register');
})

router.get("/logout", (req, res) => {
  res.clearCookie('token');
  res.redirect("/");
})

router.post('/login', async (req, res) => {
    const {email, password} = req.body;
    
    try {
      const token = await userService.login(email, password);

      res.cookie('token', token, {httpOnly: true});
      res.redirect('/'); 
      
    } catch (error) {
      const errorMessages = extractErrorMsgs(error);
      res.status(404).render('user/login', {errorMessages});
    }
    
  });
   

router.post('/register', async (req, res) => {
    const { email, password, repeatPassword } = req.body;
  
    try {
      await userService.register({ email, password, repeatPassword });
  
      res.redirect('/users/login');
    } catch (error) {
      const errorMessages = extractErrorMsgs(error);

      res.status(404).render('user/register', { errorMessages });
    }
})


module.exports = router;