import express from 'express';
import cors from 'cors';
import './sqlConnect';
import { signup } from './services/signup';
import { getLoginStatus, login, logout } from './services/login';
import { addTask, changeTaskLevel, changeTaskStatus, getCounterTasks, getTask, getTasks, removeTask, restoreTask } from './services/tasks';
import { addProduct, getProduct, getProducts, removeProduct, restoreProduct, updateProduct } from './services/products';
const session = require('express-session');

const app = express();

// const unGuards = [
//     '/login',
//     '/logout',
//     '/signup',
// ];

app.use(session({
    secret: 'my-secret',
    name: 'mySession',
    resave: false,
    saveUninitialized: false,
}));

app.use(cors({
    origin: true,
    methods: 'GET,PUT,POST,DELETE,OPTIONS',
    credentials: true,
    allowedHeaders: 'Content-Type, Accept',
}));

app.use(express.json());



app.listen(3000, () => {
    console.log('listening on 3000');
});

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/users/:userId', (req, res) => {
    res.send({
        params: req.params,
        query: req.query,
    });
});

function authGurd(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.sendStatus(401);
    }
}

app.get('/login', getLoginStatus);
app.get('/logout', logout);
app.post('/signup', signup);
app.post('/login', login);

app.get('/tasks', authGurd, getTasks);
app.get('/tasks/counter', authGurd, getCounterTasks);
app.get('/task/:id', authGurd, getTask);
app.post('/tasks', authGurd, addTask);

app.put('/tasks/:taskId/status/:newStatus', authGurd, changeTaskStatus);
app.put('/tasks/:taskId/level/:newLevel', authGurd, changeTaskLevel);
app.put('/tasks/restore/:id', authGurd, restoreTask);
app.delete('/tasks/:id', authGurd, removeTask);

app.get('/products', authGurd, getProducts);
app.get('/product/:id', authGurd, getProduct);
app.post('/products', authGurd, addProduct);
app.put('/products/:id', authGurd, updateProduct);
app.put('/products/restore/:id', authGurd, restoreProduct);
app.delete('/products/:id', authGurd, removeProduct);