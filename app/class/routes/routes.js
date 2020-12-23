const classRoutes = require('./class')
const appRouter = (app, fs) => {
    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
    });
    app.get('/api/test', (req, res) => {
        res.send({
            "data": "micro-service-1"
        });
    });

    classRoutes(app, fs);
};

module.exports = appRouter;