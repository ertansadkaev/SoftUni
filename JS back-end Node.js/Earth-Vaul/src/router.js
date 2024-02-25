const routes = require('express').Router();

const homeController = require("./controllers/homeController");
const userController = require("./controllers/userController");
const postController = require("./controllers/postController");

routes.use(homeController); 
routes.use('/users', userController);
routes.use('/posts', postController);

routes.get("*", (req, res) => {
    res.redirect("/404");
});

module.exports = routes;

