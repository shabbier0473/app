const fileRoutes = require('./files')
const appRouter = (app, fs) => {
    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
    });

    app.get('/api/test', (req, res) => {
        res.send({
            "data" : "micro-service-2"
        });
    });

    fileRoutes(app, fs);
};

module.exports = appRouter;