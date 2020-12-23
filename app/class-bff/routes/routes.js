const classRoutes = require('./class');
const axios = require('axios');

const appRouter = (app, fs) => {
    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
    });

    app.get('/api/bff/test', (req, response) => {
        axios.get("http://localhost:3001/api/test", {
            headers: { 'Content-Type': 'application/json' }
        }).then(res => {
            response.send(res.data);
        })
    });

    classRoutes(app, fs);
};

module.exports = appRouter;