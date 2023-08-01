// import models
const Post = require("../models/postModel");
const Like = require("../models/likeModel");

exports.likePost = async (req, res) => {
  try {
    const { user, post } = req.body; // user name and post id
    const like = new Like({ user, post });

    const savedLike = await like.save();

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { likes: savedLike._id } },
      { new: true }
    )
      .populate("likes")
      .exec();

    res.status(200).json({
      post: updatedPost,
    });
  } catch (err) {
    res.status(500).json({
      message: "error liking post",
    });
  }
};

exports.unlikePost = async (req, res) => {
  try {
    const { like, post } = req.body; //like id and post id

    const deletedLike = await Like.findOneAndDelete({ post: post, _id: like });

    // update post collection
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $pull: { likes: deletedLike._id } },
      { new: true }
    );

    res.json({
      post: updatedPost,
    });
  } catch (err) {
    res.status(500).json({
      message: "error unliking post",
    });
  }
};
