require("dotenv").config()
const express = require("express");
const server = express();

// console.log(process.env.PORT);

const PORT = process.env.PORT || 5000;

server.get('/api', (req, res) => {
    res.status(200).json({ messgae: "web43 is working and ready to serve"})
})

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
