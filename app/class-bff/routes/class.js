const axios = require('axios');

const fileRoutes = (app, fs) => {
    app.get('/api/bff/class', (req, response) => {
        axios.get("http://localhost:3001/api/class", {
            headers: { 'Content-Type': 'application/json' }
        }).then(res => {
            response.send(res.data);
        })
    });
};
 
module.exports = fileRoutes;