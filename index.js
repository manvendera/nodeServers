const expess = require("express");
const app = expess();
const PORT = 5000;
const HOSTNAME = "localhost";

app.get("/", (req, res) => {
  res.send("HOME PAGE");
});
app.get("/about", (req, res) => {
  res.send("About page");
});
app.get("/contact", (req, res) => {
  res.send("contact page");
});

app.listen(PORT, () => {
  console.log(`server running at ${HOSTNAME}:${PORT}`);
});
