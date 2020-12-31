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
            res.data.bff = "v2";
            response.send(res.data);
        })
    });

    app.get('/api/bff/other', (req, response) => {
        axios.get("http://localhost:3001/api/test", {
            headers: { 'Content-Type': 'application/json' }
        }).then(res => {
            res.data.bff = "v2";
            response.send(res.data);
        })
    });

    app.get('/api/bff/all', (req, response) => {
        axios.get("http://localhost:3001/api/test", {
            headers: { 'Content-Type': 'application/json' }
        }).then(res => {
            axios.get("http://localhost:3003/api/test", {
            headers: { 'Content-Type': 'application/json' }
            }).then(result => {
                result.data.bff = "v2";
                result.data.otherMsa = res.data;
                response.send(result.data);
            })
        })
    });

    fileRoutes(app, fs);
};

module.exports = appRouter;