const express = require("express");
const app = express();
const port = 3000;
const router = express.Router()
app.use(express.json());
app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`);
});






app.get("/", (req, res) => {
  res.json([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Mike Johnson" },
  ]);
});

app.get("/api", (req, res) => {
  res.json([
    { id: 4, name: "Emily Davis" },
    { id: 5, name: "Sarah Wilson" },
    { id: 6, name: "Michael Brown" },
  ]);
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  res.status(201).json({ message: "new user", user: newUser });
});

app.put("/users/:id", (req, res) => {
  const userId = req.params.id;
  const updateData = req.body;
  res.json({
    message: `Người dùng có ID ${userId} đã được cập nhật`,
    updateData,
  });
});
app.get("/ab?cd", (req, res) => {
  res.send("ab?cd");
});
app.get(
  "/example/b",
  (req, res, next) => {
    console.log("the response will be sent by the next function ...");
    next();
  },
  (req, res) => {
    res.send("Hello from B!");
    console.log("the response will be sent by the next function ...");
  }
);
const cb0 = function (req, res, next) {
  console.log("CB0");

  next();
};

const cb1 = function (req, res, next) {
  console.log("CB1");
  next();
};

app.get(
  "/example/d",
  [cb0, cb1],
  (req, res, next) => {
    console.log("the response will be sent by the next function ...");
    next();
  },
  (req, res) => {
    res.send("Hello from D!");
  }
);
const baove = (req, res, next) => {
  console.log("Middleware");
  if(["vethuong", "vevip"].includes(req.query.ve)) {
    req.face = "gach"
    return next();
  }
  res.status(403).json({ message: "Bạn không có quyền truy cập" });
}
app.use('/middleware',baove)
app.get(
  "/middleware",
  (req, res) => {
    res.status(200).json({message: "middleware",
      face: req.face
    })
  }
);

app.use('/user/:id', (req, res, next) => {
  console.log('Request URL:', req.originalUrl)
  next()
}, (req, res, next) => {
  console.log('Request Type:', req.method)
  next()
})