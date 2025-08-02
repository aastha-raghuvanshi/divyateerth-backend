const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5001;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('DivyaTeerth Backend Running');
});

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log("New contact form submission:", { name, email, message });



    res.json({ success: true, message: "Form received" });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});