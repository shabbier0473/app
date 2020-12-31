const fileRoutes = (app, fs) => {
    const dataPath = './data/file.json';

    app.get('/api/files', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            res.send(JSON.parse(data));
        });
    });
};

module.exports = fileRoutes;