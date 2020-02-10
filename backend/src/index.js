const server = require("./app");

const PORT = process.env.PORT || 9988;

server.listen(PORT, _ =>
  console.log(`Server running on http://localhost:${PORT}`)
);
