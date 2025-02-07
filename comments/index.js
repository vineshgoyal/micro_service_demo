const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 3000;

const app = express();
const comments = [
    {
        "id": 1,
        "postId": 1,
        "author": "Alice Johnson",
        "text": "Great introduction to Kubernetes!  Very helpful for beginners.",
        "date": "2024-07-27"
    },
    {
        "id": 2,
        "postId": 1,
        "author": "Bob Williams",
        "text": "I'm excited to learn more about container orchestration. Thanks for sharing!",
        "date": "2024-07-27"
    },
    {
        "id": 3,
        "postId": 2,
        "author": "Charlie Brown",
        "text": "Node.js is so powerful!  I've built several applications with it.",
        "date": "2024-07-26"
    },
    {
        "id": 4,
        "postId": 2,
        "author": "Dorothy Davis",
        "text": "Any recommendations for good Node.js tutorials?",
        "date": "2024-07-26"
    },
    {
        "id": 5,
        "postId": 3,
        "author": "Eve Wilson",
        "text": "Docker has revolutionized the way we deploy applications.  It's a game-changer!",
        "date": "2024-07-25"
    },
    {
        "id": 6,
        "postId": 3,
        "author": "Frank Garcia",
        "text": "I'm still learning Docker, but I can already see its benefits.",
        "date": "2024-07-25"
    },
    {
        "id": 7,
        "postId": 4,
        "author": "Grace Rodriguez",
        "text": "React is my favorite front-end framework.  It makes building UIs so much easier.",
        "date": "2024-07-24"
    },
    {
        "id": 8,
        "postId": 4,
        "author": "Henry Martinez",
        "text": "I'm looking for resources to learn advanced React concepts. Any suggestions?",
        "date": "2024-07-24"
    },
    {
        "id": 9,
        "postId": 5,
        "author": "Ivy Anderson",
        "text": "Microservices architecture is essential for building scalable and maintainable applications.",
        "date": "2024-07-23"
    },
    {
        "id": 10,
        "postId": 5,
        "author": "Jack Thomas",
        "text": "I'm curious about the challenges of implementing microservices.",
        "date": "2024-07-23"
    }
]

app.use(cors());
app.use(express.json());

app.get('/comments', (req, res) => {
    res.json(comments); // Send the comments data as JSON
});

// Start the server
app.listen(port, () => {
    console.log(`Comment Server is running on http://localhost:${port}`);
});

