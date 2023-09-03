const express = require("express");
const router = express.Router();

const blog = require("../Controllers/blogController");
const blogDetails = require("../Controllers/blogDetailsController");
const comment = require("../Controllers/commentController");
const message = require("../Controllers/messageController");
const portfolio = require("../Controllers/portfolioController");
const product = require("../Controllers/productController");
const profit = require("../Controllers/profitController");
const project = require("../Controllers/projectController");
const service = require("../Controllers/serviceController");
const title = require("../Controllers/titleController");

router.get('/blog/create', blog.create)
router.get('/blog/create', blog.delete)

module.exports = router;
