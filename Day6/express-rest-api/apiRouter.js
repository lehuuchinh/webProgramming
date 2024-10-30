const express = require("express");
const app = express();
const router = express.Router();
app.use(express.json());
router.get("/information", (req, res) => {
  res.json({ id: "1", name: "chinh", address: "hanoi" });
});
router.get("/", (req, res) => {
  res.json([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Mike Johnson" },
  ]);
});
router.post("/", (req, res) => {
  const newUser = req.body;
  console.log(newUser);
  res
    .status(201)
    .json({
      message: "new user",
      user: newUser,
      UserName: req.body.name,
      Pass: req.body.pass,
    });
});
module.exports = router;
