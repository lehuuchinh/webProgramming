const express = require("express");
const app = express();
const port = 3000;
const router = require("./apiRouter")
const bodyParser = require("body-parser")

app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`);
});
app.use('/api', router)

