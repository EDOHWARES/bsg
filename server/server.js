import express from 'express';

const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send('API IS WORKING...');
});

app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`);
});