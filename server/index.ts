require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;
const cors = require('cors');

const connectToDb = require('./db/connectToDb');
const ApartmentRouter = require('./routes/apartment');

const corsOptions = {
    origin: 'http://localhost:3000',
}


const start = () => {
     connectToDb().
     then(() => app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    }));
}

start();

app.use(cors(corsOptions));

app.use(express.json());

app.use('/apartments', ApartmentRouter)