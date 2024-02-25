const router = require('express').Router();
const stoneService = require('../service/stoneService');

router.get('/', async (req, res) => {
const lastStones = await stoneService.getLastStones().lean();
    res.render('home', { lastStones });
})

router.get('/404', (req, res) =>{
    res.render("404");
})

router.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

router.get('/search', async (req, res) => {
   
    res.render('search');
});

module.exports = router