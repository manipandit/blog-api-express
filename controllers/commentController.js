// import models required for comment controller
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

exports.createComment = async (req, res) => {
  try {
    // fetch data from req.body
    const { user, body, post } = req.body;

    // create a comment object
    const comment = new Comment({ user, body, post });

    // save comment to database
    const savedComment = await comment.save();

    // find the post by ID, add the comment id to its comment array
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      {
        $push: { comments: savedComment._id }, //$push helps to update the comment array with new comments ids
      },
      { new: true }
    )
      .populate("comments")
      .exec(); //populate helps to find actual comments wrt to id

    res.status(201).json({ post: updatedPost });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Server Error",
      message: error.message,
    });
  }
};
