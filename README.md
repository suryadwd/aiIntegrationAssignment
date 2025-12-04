# API Integration 

This is a small Express + Mongoose project used for learning API integration patterns. It demonstrates:

- Using Express routes and controllers to structure an API server
- Connecting to MongoDB with Mongoose

Quick start

```
npm install
# create env and set MONGO_URI and PORT 
npm run dev
```

Scripts

- `npm run dev` — start with `nodemon`
- `npm start` — start with `node`

Endpoints (implemented)

- `GET /fetch-data`
	- Fetches posts and users from `https://jsonplaceholder.typicode.com` and replaces the local `posts` and `users` collections.
	- Example response:

```
GET http://localhost:5000/fetch-data

{
	"message": "Data fetched and stored successfully in MongoDB!"
}
```

- `GET /posts`
	- Returns all posts. Supports `userId` and `title` query filters.
	- Example response (truncated):

```
GET http://localhost:5000/posts

[
	{
		"_id": "693198f2cfe1fe54d6fb7884",
		"userId": 1,
		"id": 1,
		"title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
		"body": "quia et suscipit...",
		"__v": 0
	},
	{ /* ...more posts... */ }
]
```

- `GET /posts?userId=3`
	- Example response (posts by user 3):

```
GET http://localhost:5000/posts?userId=3

[
	{ "userId": 3, "id": 21, "title": "asperiores ea ...", "body": "repellat ..." },
	{ "userId": 3, "id": 22, "title": "dolor sint ...", "body": "eos qui ..." }
]
```

- `GET /posts?title=sunt`
	- Example response (title contains `sunt`):

```
GET http://localhost:5000/posts?title=sunt

[
	{ "userId":1, "id":1, "title":"sunt aut facere..." },
	{ "userId":3, "id":24, "title":"autem hic labore sunt..." }
]
```

- `GET /posts/:id`
	- Example:

```
GET http://localhost:5000/posts/5

{
	"_id": "693198f2cfe1fe54d6fb7888",
	"userId": 1,
	"id": 5,
	"title": "nesciunt quas odio",
	"body": "repudiandae veniam ...",
	"__v": 0
}
```

- `GET /users`
	- Returns all users.

- `GET /users/:id`
	- Example:

```
GET http://localhost:5000/users/3

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

Notes

- The `id` used in `/posts/:id` and `/users/:id` refers to the numeric `id` from the imported JSONPlaceholder data, not MongoDB's `_id`.
- `GET /fetch-data` will overwrite existing collections (it deletes and reinserts data).

If you want, I can:

- Add a compact `curl` file with examples.
- Add `.env.example`.
- Produce a tiny Postman collection.

Tell me which one you prefer.
curl http://localhost:5000/posts
```

- Get all users (example):

```
curl http://localhost:5000/users
```

Check the route files for parameterized endpoints (e.g., `/posts/:id`).

**Development notes**

- The project uses ES modules (`"type": "module"` in `package.json`).
- `axios` is included for outbound HTTP requests.
- `mongoose` handles the data models and connection.

**Contributing**

If you'd like to extend the project:

- Add more detailed route documentation in `README.md` after inspecting route files.
- Add validation and error-handling middleware.
- Add tests for controllers and models.

**License**

This repository has no license file. Add one if you plan to publish or share the project publicly.

---

If you want, I can:

- Expand the README with concrete endpoint lists (I can read route files and document every route).
- Add an example `.env.example` file.
- Create a minimal Postman collection or example HTTP requests with bodies.

Tell me which of the above you'd like next.