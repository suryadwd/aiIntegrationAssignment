# API Integration Project

A small **Express + Mongoose** project to learn API integration patterns. This project demonstrates:

* Structuring an API server with **Express routes** and **controllers**.
* Connecting to **MongoDB** using **Mongoose**.
* Fetching and storing external API data (`https://jsonplaceholder.typicode.com`) locally.

## Live Link

API is live at: [https://api.devsurya.space](https://api.devsurya.space)

---

## Quick Start

1. Clone the repository and install dependencies:

```bash
npm install
```

2. Create a `.env` file and set the following:

```env
MONGO_URI=<your_mongodb_connection_string>
PORT=5000
```

3. Start the development server:

```bash
npm run dev   # Runs with nodemon
npm start     # Runs with node
```

---

## Available Scripts

* `npm run dev` — Start server with **nodemon** for auto-reload.
* `npm start` — Start server normally using **node**.

---

## API Endpoints

### 1. Fetch Data

**GET `/fetch-data`**

**Info:** Fetch posts and users from JSONPlaceholder and store in MongoDB

**Description:** Fetches posts and users from `https://jsonplaceholder.typicode.com` and replaces the local MongoDB `posts` and `users` collections.

**Request:**

```bash
curl https://api.devsurya.space/fetch-data
```

**Response:**

```json
{
  "message": "Data fetched and stored successfully in MongoDB!"
}
```

**Status Code:** 200 OK

---

### 2. Get All Posts

**GET `/posts`**

**Info:** Get all posts

**Description:** Returns all posts stored in MongoDB. Supports optional query filters.

**Request:**

```bash
curl https://api.devsurya.space/posts
```

**Response:**

```json
[
  {
    "_id": "693198f2cfe1fe54d6fb7884",
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    "__v": 0
  },
  {
    "_id": "693198f2cfe1fe54d6fb7885",
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis",
    "__v": 0
  }
]
```

**Status Code:** 200 OK

---

### 3. Get Posts by User ID

**GET `/posts?userId=3`**

**Info:** Get posts filtered by a specific userId

**Description:** Returns posts filtered by a specific `userId`.

**Request:**

```bash
curl https://api.devsurya.space/posts?userId=3
```

**Response:**

```json
[
  {
    "_id": "693198f2cfe1fe54d6fb7898",
    "userId": 3,
    "id": 21,
    "title": "asperiores ea ipsam voluptatibus modi minima quia sint",
    "body": "repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam",
    "__v": 0
  },
  {
    "_id": "693198f2cfe1fe54d6fb7899",
    "userId": 3,
    "id": 22,
    "title": "dolor sint quo a velit explicabo quia nam",
    "body": "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit",
    "__v": 0
  }
]
```

**Status Code:** 200 OK

---

### 4. Get Posts by Title

**GET `/posts?title=sunt`**

**Info:** Get posts filtered by title keyword

**Description:** Returns posts with titles matching the given keyword (case-insensitive).

**Request:**

```bash
curl https://api.devsurya.space/posts?title=sunt
```

**Response:**

```json
[
  {
    "_id": "693198f2cfe1fe54d6fb7884",
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam",
    "__v": 0
  },
  {
    "_id": "693198f2cfe1fe54d6fb789b",
    "userId": 3,
    "id": 24,
    "title": "autem hic labore sunt dolores incidunt",
    "body": "enim et ex nulla\nomnis voluptas quia qui\nvoluptatem consequatur numquam aliquam sunt",
    "__v": 0
  }
]
```

**Status Code:** 200 OK

---

### 5. Get Single Post by ID

**GET `/posts/:id`**

**Info:** Get details of a single post by its ID

**Description:** Returns a single post by its numeric `id` (from JSONPlaceholder).

**Request:**

```bash
curl https://api.devsurya.space/posts/5
```

**Response:**

```json
{
  "_id": "693198f2cfe1fe54d6fb7888",
  "userId": 1,
  "id": 5,
  "title": "nesciunt quas odio",
  "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
  "__v": 0
}
```

**Status Code:** 200 OK

**Error Response (if not found):**

```json
{
  "error": "Post not found"
}
```

**Status Code:** 404 Not Found

---

### 6. Get All Users

**GET `/users`**

**Info:** Get all users

**Description:** Returns all users stored in MongoDB.

**Request:**

```bash
curl https://api.devsurya.space/users
```

**Response:**

```json
[
  {
    "_id": "693198f3cfe1fe54d6fb78ea",
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "phone": "1-770-736-8031",
    "website": "hildegard.org",
    "__v": 0
  }
]
```

**Status Code:** 200 OK

---

### 7. Get Single User by ID

**GET `/users/:id`**

**Info:** Get details of a single user by their ID

**Description:** Returns a single user by their numeric `id` (from JSONPlaceholder).

**Request:**

```bash
curl https://api.devsurya.space/users/3
```

**Response:**

```json
{
  "_id": "693198f3cfe1fe54d6fb78eb",
  "id": 3,
  "name": "Clementine Bauch",
  "username": "Samantha",
  "email": "Nathan@yesenia.net",
  "phone": "1-463-123-4447",
  "website": "ramiro.info",
  "__v": 0
}
```

**Status Code:** 200 OK

**Error Response (if not found):**

```json
{
  "error": "User not found"
}
```

**Status Code:** 404 Not Found

---

## Notes

* `/posts/:id` and `/users/:id` use the **JSONPlaceholder numeric `id`**, not MongoDB `_id`.
* `GET /fetch-data` will **overwrite existing collections**.

---

## Development Notes

* Uses **ES Modules** (`"type": "module"` in `package.json`).
* Uses `mongoose` for MongoDB models and connections.

---

## License

No license file included. Add one if publishing publicly.