const express = require("express");
const cors = require("cors");
const crypto = require('crypto');
const { default: axios } = require("axios");

const port = process.env.PORT || 3000;
const version = 2.4;
const app = express();
const posts = [
    {
        "id": 1,
        "title": "Introduction to Kubernetes",
        "content": "Kubernetes is an open-source container orchestration system for automating deployment, scaling, and management of containerized applications.",
        "author": "John Doe",
        "date": "2024-07-26"
    },
    {
        "id": 2,
        "title": "Building a Node.js Application",
        "content": "Node.js is a JavaScript runtime environment that executes JavaScript code outside of a web browser.",
        "author": "Jane Smith",
        "date": "2024-07-25"
    },
    {
        "id": 3,
        "title": "Understanding Docker",
        "content": "Docker is a platform for building, shipping, and running applications in containers.",
        "author": "David Lee",
        "date": "2024-07-24"
    },
    {
        "id": 4,
        "title": "Getting Started with React",
        "content": "React is a JavaScript library for building user interfaces (UIs) based on UI components.",
        "author": "Sarah Jones",
        "date": "2024-07-23"
    },
    {
        "id": 5,
        "title": "Introduction to Microservices",
        "content": "Microservices are an architectural style that structures an application as a collection of small autonomous services.",
        "author": "Michael Brown",
        "date": "2024-07-22"
    },
    {
        "id": 6,
        "title": "Working with Databases",
        "content": "Databases are organized collections of structured information, or data, typically stored electronically in a computer system.",
        "author": "Emily Davis",
        "date": "2024-07-21"
    },
    {
        "id": 7,
        "title": "API Design Best Practices",
        "content": "RESTful APIs are a common way to design web services.  Good API design is crucial for maintainability and scalability.",
        "author": "Robert Wilson",
        "date": "2024-07-20"
    },
    {
        "id": 8,
        "title": "Cloud Computing Fundamentals",
        "content": "Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user.",
        "author": "Ashley Garcia",
        "date": "2024-07-19"
    },
    {
        "id": 9,
        "title": "DevOps Principles",
        "content": "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops).",
        "author": "Christopher Rodriguez",
        "date": "2024-07-18"
    },
    {
        "id": 10,
        "title": "Security Best Practices",
        "content": "Implementing robust security measures is essential for protecting applications and data.",
        "author": "Angela Martinez",
        "date": "2024-07-17"
    }
];

function generatePostId() {
    return crypto.randomUUID();
  }

  
app.use(cors());
app.use(express.json());

app.post("/event", (req, res)=>{
    console.log("receive event", req.body);
});

app.get('/posts', (req, res) => {
    res.json(posts); // Send the posts data as JSON
});

app.get('/posts/version', (req, res) => {
    res.json({
        version
    }); 
});

app.post('/posts/create', async (req, res) => {
    const postObj = req.body;
    postObj.id = generatePostId();
    console.log("postObj => ", postObj);
    posts.push(postObj);

    try {
        await axios.post("http://event-cluster-service:8085/events", {
            type: "PostCreated",
            ...postObj
        });
        res.json(postObj);
    } catch (error) {
        console.error("Error sending event:", error.message);

        // Optional: Log detailed error response from Axios
        if (error.response) {
            console.error("Response data:", error.response.data);
            console.error("Status code:", error.response.status);
        } else if (error.request) {
            console.error("No response received:", error.request);
        }

        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
});


// Start the server
app.listen(port, () => {
    console.log("Version:", version);
    console.log(`Posts Server is running on http://localhost:${port}`);
});

