const fileRoutes = (app, fs) => {
    const dataPath = './data/class.json';

    app.get('/api/class', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            res.send(JSON.parse(data));
        });
    });
};

module.exports = fileRoutes;