const express = require("express");
const Blog = require("../models/Blog");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// GET all blogs with pagination
router.get("/", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 6;

    const skip = (page - 1) * limit;

    const totalBlogs = await Blog.countDocuments();

    const blogs = await Blog.find()
      .populate("author", "name email")
      .sort({ createdAt: 1 })
      .skip(skip)
      .limit(limit);

    const totalPages = Math.ceil(totalBlogs / limit);

    res.json({
      blogs,
      currentPage: page,
      totalPages,
      totalBlogs,
    });
  } catch (error) {
    console.error("Get blogs error:", error);

    res.status(500).json({
      message: "Failed to get blogs",
    });
  }
});

// GET single blog
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id)
      .populate("author", "name email");

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    res.json({
      blog,
    });
  } catch (error) {
    console.error("Get blog error:", error);

    res.status(500).json({
      message: "Failed to get blog",
    });
  }
});

// CREATE blog
router.post("/", authMiddleware, async (req, res) => {
  try {
    const {
      heading,
      image,
      content,
      hashtags,
    } = req.body;

    if (!heading || !image || !content || !hashtags) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const blog = await Blog.create({
      heading,
      image,
      content,
      hashtags,
      author: req.user.userId,
    });

    res.status(201).json({
      message: "Blog created successfully",
      blog,
    });
  } catch (error) {
    console.error("Create blog error:", error);

    res.status(500).json({
      message: "Failed to create blog",
    });
  }
});

module.exports = router;