require("dotenv/config");
const server = require("./app");
const PORT = process.env.PORT;

server.listen(PORT, _ =>
  console.log(`Server running on http://localhost:${PORT}`)
);
