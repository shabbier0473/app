const axios = require('axios');

const fileRoutes = (app, fs) => {
    app.get('/api/bff/class', (req, response) => {
        headers = { 'Content-Type': 'application/json' }
        if (req.headers.team) {
            headers = { team : "sqe"}
        }
        axios.get("http://localhost:3001/api/class", { headers
        }).then(res => {
            response.send(res.data);
        })
    });
};
 
module.exports = fileRoutes;