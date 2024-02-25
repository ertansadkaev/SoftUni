const router = require('express').Router();
const stoneService = require('../service/stoneService');
const { extractErrorMsgs } = require('./../utils/errorHandler');
const { isAuth } = require('../middlewares/authMiddleware');

router.get('/dashboard', async (req, res) => {
    const stones = await stoneService.getAll().lean();

    res.render('post/dashboard', { stones });
})

router.get('/create', isAuth, (req, res) => {
    res.render('post/create');
})
router.post('/create', async (req, res) => {
    try {
        const { name, category, color, image, location, formula, description } = req.body;
        const payload = { name, category, color, image, location, formula, description, owner: req.user };
    
        await stoneService.create(payload);
    
        res.redirect('/posts/dashboard');
        
    } catch (error) {
        const errorMessages = extractErrorMsgs(error);
        res.status(404).render(`post/create`, {errorMessages});
    }
})


router.get('/:stoneId/details', async (req, res) => {
    const { stoneId } = req.params;
    const stone = await stoneService.singleStone(stoneId).lean();

    const { user } = req;
    const { owner } = stone;
    const isOwner = user?._id === owner.toString();
    const hasLiked = stone.likedList?.some((l) => l?._id.toString() === user?._id);

    res.render('post/details', { stone, isOwner, hasLiked });
});

router.get('/:stoneId/edit', isAuth, async (req, res) => {
    const { stoneId } = req.params; 
    const stone = await stoneService.singleStone(stoneId).lean();
    const { user } = req;
    const { owner } = stone;
    const isOwner = user?._id === owner.toString();
    
    if (isOwner) {
    const stone = await stoneService.singleStone(stoneId).lean();
    
    res.render('post/edit', { stone });    
    } else {

    res.redirect('/posts/dashboard');
    }
});

router.post('/:stoneId/edit', async (req, res) => {
    const { stoneId } = req.params; 
    const { name, category, color, image, location, formula, description } = req.body;
    const payload = { name, category, color, image, location, formula, description, owner: req.user };
    try {
        await stoneService.update(stoneId, payload);
        res.redirect(`/posts/${stoneId}/details`);
        
      } catch (error) {
        const errorMessages = extractErrorMsgs(error);
        res.status(404).render(`post/edit`, {errorMessages});
      }
      
})

router.get('/:stoneId/delete', async (req, res) => {
    const { stoneId } = req.params;
    const stone = await stoneService.singleStone(stoneId).lean();

    const { user } = req;
    const { owner } = stone;
    const isOwner = user?._id === owner.toString();

    if (isOwner) {
    await stoneService.delete(stoneId);  
    }

    res.redirect('/posts/dashboard');
});

router.get('/:stoneId/like', async (req, res) => {
    const { stoneId } = req.params;
    const { _id } = req.user;
  
    await stoneService.addLikeToStone(stoneId, _id);
  
    res.redirect(`/posts/${stoneId}/details`);
  });


module.exports = router