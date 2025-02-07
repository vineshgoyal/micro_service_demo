const express = require("express");
const axios = require("axios");

const port = process.env.PORT || 3000;
const version = 0.1;
const app = express();

app.use(express.json());

app.post('/events/version', (req, res) => {
    res.send({ version });
});


app.post('/events', async (req, res) => {
    const event = req.body;
    console.log("Event received by event bus", event);
    await axios.post("http://post-cluster-service:8080/event", event);
    res.send({ status: "ok" });
});

// Start the server
app.listen(port, () => {
    console.log("Version:", version);
    console.log(`Event Server is running on http://localhost:${port}`);
});

