const axios = require('axios');

axios.get('http://localhost:3000/player')
    .then(response => {
        console.log(response.data);
    })
    .catch(err => {
        console.error(err);
        console.log("Error");
    })