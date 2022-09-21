import express from 'express';

const app = express();

app.get('/ads', (request, response) => {

    response.json([
        {id: 1, name: 'ads 1'}
    ]);

});

app.listen(3333);