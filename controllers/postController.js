const Post = require("../models/postModel");

exports.createPost = async (req, res) => {
  try {
    const { title, body } = req.body;

    const post = new Post({ title, body });

    const savedPost = await post.save();

    res.status(201).json({
      message: "post created successfully",
      post: savedPost,
    });
  } catch (error) {
    res.status(500).json({
      message: "error creating post",
    });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("likes").populate("comments");
    res.status(200).json({
      message: "posts fetched successfully",
      posts,
    });
  } catch (error) {
    res.status(500).json({
      message: "error fetching posts",
    });
  }
};
