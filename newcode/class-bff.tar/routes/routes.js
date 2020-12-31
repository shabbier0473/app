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
            res.data.bff = "v1";
            response.send(res.data);
        })
    });

    app.get('/api/bff/other', (req, response) => {
        axios.get("http://localhost:3003/api/test", {
            headers: { 'Content-Type': 'application/json' }
        }).then(res => {
            res.data.bff = "v1";
            response.send(res.data);
        })
    });

    app.get('/api/bff/all', (req, response) => {
        axios.get("http://localhost:3003/api/test", {
            headers: { 'Content-Type': 'application/json' }
        }).then(res => {
            axios.get("http://localhost:3001/api/test", {
            headers: { 'Content-Type': 'application/json' }
            }).then(result => {
                result.data.bff = "v1";
                result.data.otherMSA = res.data;
                response.send(result.data);
            })
        })
    });

    classRoutes(app, fs);
};

module.exports = appRouter;