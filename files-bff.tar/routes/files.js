const axios = require('axios');
 
const fileRoutes = (app, fs) => {
 
    app.get('/api/bff/files', (req, response) => {
        axios.get("http://localhost:3003/api/files", {
            headers: { 'Content-Type': 'application/json' }
        }).then(res => {
            response.send(res.data);
        })
    });
};
 
module.exports = fileRoutes;