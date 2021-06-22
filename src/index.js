import express from 'express';
import ussdRoute from './route/index';

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(ussdRoute);


const PORT = "";

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});
