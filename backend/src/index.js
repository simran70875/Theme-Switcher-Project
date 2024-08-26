const app = require("./app");
const port = 3000;
const server = app.listen(port, () => {
  console.log(
    `Book store management server is running on http://localhost:${port}`
  );
});
server.on("error", (err) => {
  console.error("Server error:", err);
});
