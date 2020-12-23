const fileRoutes = require('./files');
const axios = require('axios');

const appRouter = (app, fs) => {
    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
    });

    app.get('/api/bff/test', (req, response) => {
        axios.get("http://localhost:3003/api/test", {
            headers: { 'Content-Type': 'application/json' }
        }).then(res => {
            response.send(res.data);
        })
    });

    fileRoutes(app, fs);
};

module.exports = appRouter;