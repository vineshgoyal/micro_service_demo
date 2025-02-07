const express = require("express");
const cors = require("cors");

const port = process.env.PORT || 3000;
const version = 0.1;
const app = express();
const posts = {
    "1": {
        "id": 1,
        "title": "Introduction to Kubernetes",
        "content": "Kubernetes is an open-source container orchestration system for automating deployment, scaling, and management of containerized applications.",
        "author": "John Doe",
        "date": "2024-07-26"
    },
    "2":{
        "id": 2,
        "title": "Building a Node.js Application",
        "content": "Node.js is a JavaScript runtime environment that executes JavaScript code outside of a web browser.",
        "author": "Jane Smith",
        "date": "2024-07-25"
    }
};

const comments = {
    "1": {
        "1": {
            "id": 1,
            "content": "Node.js is a JavaScript runtime environment that executes JavaScript code outside of a web browser.",
            "postId": 1
        }
    }
};

app.use(cors());
app.use(express.json());

app.post("/event", (req, res)=>{
    console.log("receive event", req.body);
    const {type, data} = req.body;
    switch(type){
        case 'PostCreated':
            posts[data.id] = data;
        break;
        case 'CommentCreated':
            if(!comments[data.postId]){
                comments[data.postId] = [];
            }
            comments[data.postId][data.id] = data;
        break;
    }

    res.json({status: "OK"});
});

app.get('/posts', (req, res) => {
    res.json(posts); // Send the posts data as JSON
});

app.get('/posts/:id/comments', (req, res) => {
    const id = req.params.id;
    if (comments[id]) { // Important: Check if the post ID exists in your comments data
        res.json(comments[id]);
    } else {
        res.json([]);
    }
});

// Start the server
app.listen(port, () => {
    console.log("Version:", version);
    console.log(`Query Server is running on http://localhost:${port}`);
});

