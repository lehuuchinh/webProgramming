const express = require('express');
const app = express();
const port = 3000
const router = require('./routers')
// Middleware để phân tích JSON
app.use(express.json());
// Middleware để phân tích x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
const db = require('./configs');
app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});
app.use('/todo', router)
app.get('/', (req, res) => {
    res.send("lehuuchinh")
})