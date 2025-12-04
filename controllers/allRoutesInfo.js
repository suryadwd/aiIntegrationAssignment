export const allRoutesInfo = (req, res) => {
  res.json({
    message: "Welcome to API Integration Internship Backend",
    endpoints: [
      { method: "GET", endpoint: "/fetch-data", info: "Fetch posts and users from JSONPlaceholder and store in MongoDB" },
      { method: "GET", endpoint: "/posts", info: "Get all posts" },
      { method: "GET", endpoint: "/posts?userId=3", info: "Get posts filtered by a specific userId" },
      { method: "GET", endpoint: "/posts?title=sunt", info: "Get posts filtered by title keyword" },
      { method: "GET", endpoint: "/posts/5", info: "Get details of a single post by its ID" },
      { method: "GET", endpoint: "/users/3", info: "Get details of a single user by their ID" }
    ]
  });
};