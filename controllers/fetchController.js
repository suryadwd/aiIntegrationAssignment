import axios from "axios";
import Post from "../models/Post.js";
import User from "../models/User.js";

export const fetchData = async (req, res) => {
  try {
    const postsResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const posts = postsResponse.data;
    await Post.deleteMany({});
    await Post.insertMany(posts);

    const usersResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const users = usersResponse.data;
    await User.deleteMany({});
    await User.insertMany(users);

    res.json({ message: "Data fetched and stored successfully in MongoDB!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch or store data" });
  }
};
