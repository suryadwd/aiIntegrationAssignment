import Post from "../models/Post.js";

export const getPosts = async (req, res) => {
  try {
    const { userId, title } = req.query;
    let filter = {};

    if (userId) filter.userId = Number(userId);
    if (title) filter.title = { $regex: title, $options: "i" };

    const posts = await Post.find(filter);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Failed to get posts" });
  }
};

export const getPostById = async (req, res) => {
  try {
    const post = await Post.findOne({ id: Number(req.params.id) });
    if (!post) return res.status(404).json({ error: "Post not found" });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Failed to get post" });
  }
};
