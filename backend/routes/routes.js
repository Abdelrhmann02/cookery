const express = require("express");
const router = express.Router();
const controller = require("../controllers/controllers");

router.get("/", controller.listRecipes);
router.get("/all", controller.listRecipes);
router.get("/Breakfast",controller.listBreakfast);
router.get("/Dinner",controller.listDinner);

router.use(function(req, res) {
        res.status(404);
        res.type('text/plain');
        res.send('404 Not found.');
    });

router.use(function(err, req, res, next) {
        res.status(500);
        res.type('text/plain');
        res.send('Internal Server Error.');
    });

module.exports = router;